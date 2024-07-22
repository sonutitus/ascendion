import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FindCruise {
    /**
     * define selectors using getter methods
     */
     get allCruise () {
        return $('//span[@id="selected-view-result"]');

    }

}

export default new FindCruise();
