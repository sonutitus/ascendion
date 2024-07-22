class Utils {
  async getBaseUrl(): Promise<string> {
    const brand = process.env.BRAND;
    console.log(`BRAND : ${brand}`);
    switch (brand) {
      case "seabournCruise":
        return 'https://www.seabourn.com/en';
      case 'hollandAmerica':
        return 'https://www.hollandamerica.com/en#';
      default:
        return 'https://www.google.com/';
    }
  }

  async click(element: WebdriverIO.Element): Promise<any> {
    await element.waitForClickable();
    await element.click();
  }
}

export default new Utils;
