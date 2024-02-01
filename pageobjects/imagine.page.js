class ImaginePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * define or overwrite page methods
   */
  async getTagLine() {
    const tagLineText = await this.page.textContent('.tagline');

    return tagLineText.trim();
  }
}

module.exports = ImaginePage;