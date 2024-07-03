require("dotenv").config();
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto("https://apexwealth.site/auth/signin");
  console.log("Signing in");

  await page.type('input[name="email"]', process.env.EMAIL);
  await page.type('input[name="password"]', process.env.PASSWORD);

  await page.click('button[class="sign__btn"]');
  console.log("Signed in");

  await page.waitForNavigation();

  await page.goto("https://apexwealth.site/profile/bonus");

  await page.click('button[data-id="claimBonus"]');
  console.log("Successfully claimed");

  setTimeout(async () => {
    await browser.close();
  }, 1000);
})();
