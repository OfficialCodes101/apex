require("dotenv").config();
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://apexwealth.site/auth/signin");

  await page.type('input[name="email"]', process.env.EMAIL);
  await page.type('input[name="password"]', process.env.PASSWORD);

  await page.click('button[class="sign__btn"]');

  await page.waitForNavigation();

  await page.goto("https://apexwealth.site/profile/bonus");

  await page.click('button[data-id="claimBonus"]');

  setTimeout(async () => {
    await browser.close();
  }, 1000);
})();
