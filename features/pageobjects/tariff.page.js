import Page from "./page.js";

class TariffPage extends Page {

    async chooseCurrency(currencyName) {
        await $("//div[@class='currency-select']").click();
        await $(`//option[@value=\'${currencyName}\']`).click();
    }

    async getSelectedCurrency(currencySymbol) {
         return await $(`//span[@class=\'currency\' and contains(text(),\'${currencySymbol}\')]`).getText();
    }

    async selectEmployeesCount(employeesCount){
        await $("//div[@class='tariff-card' and contains(h2, 'HR')]//div[@class='custom-select']").click();
        await $(`//div[@class='tariff-card' and contains(h2, 'HR')]//option[contains(text(),\'${employeesCount}\')]`).click();
    }

    async getPriceValue() {
        try {
            return await $("//div[@class='tariff-card' and contains(h2, 'HR')]//span[@class='price-value']").getText()
        } catch (error) {
            return await $("//div[@class='individual-price']//h4[@class='price-title']").getText()
        }
    }
    async clickOnGetConsultationButton(){
        await $("//div[@class='btn-wrap']").click()
    }
}

export default new TariffPage();