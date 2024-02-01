class OrosHomePage {
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
    const title = await this.page.$('.banner-text');

    return await title.textContent();
  }
}

module.exports = OrosHomePage;