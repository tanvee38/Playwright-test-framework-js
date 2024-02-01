class HomePage {
  constructor(page, context) {
    this.context = context;
    this.page = page;
  }

  /**
   * define elements
   */
  // async getHowAUWorksLink() {
  //   // To get a single element we can use the $ method on the page object as well as most element handles. The $ method takes a CSS selector as an argument. It is roughly equal to JavaScript's native querySelector as it tries to find the first element on the page matching the selector or returns null if nothing was found.
  //   // For more information about Playwright's element selectors kindly check: https://github.com/microsoft/playwright/blob/master/docs/selectors.md
  //   // return await  this.page.$('.link-block.local-link');
  // }

  /**
   * define or overwrite page methods
   */
  async getTitle() {
    const title = await this.page.$('.content-title');

    return await title.textContent();
  }

  async clickGetStartedLink() {
    // Wait for some additional time before clicking the link.
    // await this.page.waitForTimeout(2000);
    
    const getStartedLink = await this.page.$('.hero-button-label');

    await Promise.all([
      this.page.waitForNavigation(),
      
      getStartedLink.click()
    ]);
  }

  async clickApplyLink() {
    const applyLink = await this.page.$('.btn.apply-ghost');

    await Promise.all([
      this.page.waitForNavigation(),
      
      applyLink.click()
    ]);
  }

  // async clickHowAUWorksLink() {
  //   // Wait for some additional time before clicking the link.
  //   await this.page.waitForTimeout(2000);
    
  //   const parentLink = await this.page.$('a span');

  //   await parentLink.click();

  //   const link = await this.page.evaluateHandle(`[...document.querySelectorAll('#howauworks a')].find(el => el.textContent === 'How AU works')`);
    
  //   await Promise.all([
  //     this.page.waitForNavigation(),
      
  //     link.click()
  //   ]);
  // }

  // async clickStrategicPlanLink() {
  //   // Wait for some additional time before clicking the link.
  //   await this.page.waitForTimeout(2000);

  //   const navLinks = await this.page.evaluateHandle(`[...document.querySelectorAll('#util-nav a')]`);

  //   const strategicPlanLink = await this.page.evaluateHandle((navLinks) => navLinks.find(el => el.textContent.trim() === 'Strategic Plan'), navLinks);

  //   const [newPage] = await Promise.all([
  //     this.context.waitForEvent('page'),
  //     this.page.evaluate(strategicPlanLink => strategicPlanLink.click(), strategicPlanLink)
  //   ]);

  //   await newPage.waitForLoadState();
  // }
}

module.exports = HomePage;