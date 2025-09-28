import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://app.mymusicstaff.com/Teacher/v2/en/home');


  await page.fill('#MainContent_contentBody_textboxEmail', 'mayuralokhande007@gmail.com');
  await page.fill('#MainContent_contentBody_textboxPassword', 'Mayura@123');

  await page.click('#MainContent_contentBody_buttonLogin');

  await page.waitForURL('**/Teacher/v2/en/home');

  
  await context.storageState({ path: './tests/auth.json' });
  await browser.close();
})();
