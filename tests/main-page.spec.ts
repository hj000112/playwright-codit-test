import { test, expect, chromium, Page } from '@playwright/test';

let page: Page;
const isCI = process.env.CI === 'true';


test.beforeAll(async () => {
  const browser = await chromium.launch({
    headless: isCI,              // CI 환경이면 true, 로컬이면 false
    slowMo: isCI ? 0 : 300       // 로컬에서는 천천히 동작 (디버깅용)
  });
  
  const context = await browser.newContext(); 

  page = await context.newPage();
  await page.goto('https://thecodit.com/kr-ko');
  await page.waitForTimeout(2000); // 닫힌 후 렌더링 대기
});



test('메인 페이지의 중요 텍스트가 보이는지 확인', async () => {
  await expect(
    page
    .getByRole('button', { name: '2025 대선', exact: true }))
    .toBeVisible();

  await expect(
    page
    .getByRole('heading', { name: '주요 동향 관련 법령' }))
    .toBeVisible();

});


test('주요 동향 섹션의 첫 번째 뉴스 카드를 클릭하면 외부 기사로 이동', async () => {
  if (isCI) {
    test.skip(true, 'CI 환경에서는 외부 기사 테스트를 건너뜁니다.');
  }

  const section = page
  .getByRole('heading', { name: /주요 동향/ })
  .locator('..')
  .locator('..');

  const newsCard = section.locator('a').first();

  const [newPage] = await Promise.all([
    page
    .context()
    .waitForEvent('page'), 
    newsCard.click(),
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toMatch(/article|News/); // 뉴스 확인
});


test('존재하지 않는 텍스트는 보이지 않아야 함', async () => {
  await expect(page.getByText('없는 텍스트')).not.toBeVisible();
});