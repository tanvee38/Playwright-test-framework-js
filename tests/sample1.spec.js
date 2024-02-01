//Page objects
const HomePage =require('../pageobjects/home.page');
const AuAdvantagePage =require('../pageobjects/au-advantage.page');

const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  // Go to Athabasca University Home Page
  await page.goto('https://www.athabascau.ca/');

  const homePage = new HomePage(page);

  // Get the title of the home page
  const title = await homePage.getTitle(); 
  
  // Validate that the home page title is correct
  expect(title).toBe("We are Canada’s Open University");
});

test('Should navigate to au advantage page', async ({ page }) => {
  // Go to Athabasca University Home Page
  await page.goto('https://www.athabascau.ca/');

  const homePage = new HomePage(page);

  await homePage.clickGetStartedLink();

  const auAdvantagePage = new AuAdvantagePage(page);

  const title = await auAdvantagePage.getTitle();

  expect(title).toContain("The AU advantage");
});