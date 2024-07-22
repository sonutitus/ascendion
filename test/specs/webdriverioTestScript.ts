import utils from '../../utils';
import findCruise from '../pageobjects/findCruise';
import homePage from '../pageobjects/home.page'

describe('My Login application', () => {
    it('Should Validate you are on Home Page', async () => {
        
        await homePage.acceptCookies();
        await homePage.validateHomePageTitle();
    
    })

    it('Should Navigate to Find your Cruise Page', async () => {
        await utils.click(await homePage.findACruiseTab);
        await utils.click(await homePage.findACruise);
        await findCruise.allCruise.waitForDisplayed();
        
    })
})

