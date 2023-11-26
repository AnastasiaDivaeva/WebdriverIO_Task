import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    */
    async open() {
        return await browser.url(`https://hurma.work/`)
    }
}
