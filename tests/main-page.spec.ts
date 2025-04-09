import { test, expect, chromium, Page } from '@playwright/test';

let page: Page;

test.beforeAll(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext(); // 쿠키, 세션, 로컬스토리지 없는 상태로 설정
  page = await context.newPage();
  await page.goto('https://thecodit.com/kr-ko');
  // await page.getByRole('button', { name: '닫기' }).click();
  await page.waitForTimeout(2000); // 닫힌 후 렌더링 대기
});


test('주요 뉴스 텍스트가 보이는지 확인', async () => {
  // await expect(page.getByText('주요 동향')).toBeVisible();
  await expect(page.getByRole('button', { name: '2025 대선', exact: true })).toBeVisible();
});

