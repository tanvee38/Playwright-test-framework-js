//Page objects
const HomePage =require('../pageobjects/home.page');
const OrosHomePage =require('../pageobjects/oros-home.page');

const { test, expect } = require('@playwright/test');

test('Should validate the title of oros page', async ({ page }) => {
  // Go to Athabasca University Home Page
  await page.goto('https://www.athabascau.ca/');

  const homePage = new HomePage(page);

  // Click on apply link
  await homePage.clickApplyLink();

  // oros page
  const orosHomePage = new OrosHomePage(page);

  const title = await orosHomePage.getTitle(); 
  
  // Validate that the home page title is correct
  expect(title.trim()).toBe('Office of the Registrar');
});
