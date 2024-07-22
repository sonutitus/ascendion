import { $ } from '@wdio/globals'
import { homePage } from '../constants/homepage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get cookies(){
        if(process.env.Brand==="hollandAmerica"){
            return $('//button[@id="onetrust-accept-btn-handler"]');
        }else{
            return $('//div[@id="onetrust-close-btn-container"]');
        }
       
    }

    get findACruiseTab () {
        if(process.env.Brand==="hollandAmerica"){
                return $('//a[@data-id="Bookacruise"]');
        }else{
            return $('//a[@data-automation-id="en-findACruise"]');
        }    
    }

    get findACruise(){
        if(process.env.Brand==="hollandAmerica"){
            return $("//a[text()='Find Cruises' and not(@data-id='findACruise')]");
    }else{
        return $("//a[text()='Find a Cruise' and not(@data-id='findACruise')]");
    }
    }

    async acceptCookies(){
        await this.cookies.waitForDisplayed();
        await this.cookies.click()
    }

    async validateHomePageTitle(){
        const title = await browser.getTitle();
        console.log("title:" +title);
        if(process.env.Brand==="hollandAmerica"){
            expect(title).toEqual(homePage.HollandAmericaTitle);   
        }else{
            expect(title).toEqual(homePage.SeabournTitle);
        }
    }
}

export default new HomePage();
