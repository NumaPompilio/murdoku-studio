const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.error('BROWSER ERROR:', error));

  const url = 'file://' + path.resolve('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html');
  await page.goto(url);
  
  await page.waitForTimeout(1000);
  
  // Click the predefined map button
  page.on('dialog', async dialog => {
    console.log('DIALOG OPENED:', dialog.message());
    await dialog.accept();
  });
  
  console.log('Clicking predefined map button...');
  await page.click('.predef-map-btn');
  
  await page.waitForTimeout(1000);
  
  // Check the title
  const title = await page.$eval('#mapTitle', el => el.value);
  console.log('Map title after load:', title);
  
  await browser.close();
})();
