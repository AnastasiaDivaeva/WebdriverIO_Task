import Page from "./page.js";
import * as path from "path";

class TariffPage extends Page {


    async chooseCurrency(currencyName) {
        await $('//div[@class=\'currency-select\']').click();
        await $(`//option[@value=\'${currencyName}\']`).click();
    }

    async getSelectedCurrency(currencySymbol) {
         return await $(`//span[@class=\'currency\' and contains(text(),\'${currencySymbol}\')]`).getText();
    }
}

export default new TariffPage();