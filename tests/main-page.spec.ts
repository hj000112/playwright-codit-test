import { test, expect, chromium, Page } from '@playwright/test';

let page: Page;
const isCI = process.env.CI === 'true';




test.beforeAll(async () => {
  const browser = await chromium.launch({
    headless: isCI,              // CI 환경이면 true, 로컬이면 false
    slowMo: isCI ? 0 : 300       // 로컬에서는 천천히 동작 (디버깅용)
  });
  
  const context = await browser.newContext(); // 쿠키, 세션, 로컬스토리지 없는 상태로 설정
  page = await context.newPage();
  await page.goto('https://thecodit.com/kr-ko');

  await page.waitForTimeout(2000); // 닫힌 후 렌더링 대기
});



test('메인 페이지의 중요 텍스트가 보이는지 확인', async () => {
  await expect(page.getByRole('button', { name: '2025 대선', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: '주요 동향 관련 법령' })).toBeVisible();
});

test('뉴스 카드를 클릭했을 때 상세 페이지로 이동하는지 확인', async () => {
    // 새 페이지 열림 추적
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByText('한덕수 침묵 속 대통령 추대위 출범').click(),
  ]);

  await newPage.waitForLoadState();

  // 새 페이지 URL 확인
  expect(newPage.url()).toContain('article');

  // 주요 요소 확인
  await expect(newPage.getByRole('heading', { level: 1 })).toBeVisible();
});




