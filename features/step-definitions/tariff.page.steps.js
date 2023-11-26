import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import TariffPage from "../pageobjects/tariff.page.js";
import HomePage from "../pageobjects/home.page.js";


Given(/^Guest open Home Page$/, async () => {
    await HomePage.open()
});
When(/^Clicks on the section with tariffs$/, async () => {
    await HomePage.clickTariffButton()
});
When(/^Selects the (\w+) currency$/, async (currencyName) => {
    await TariffPage.chooseCurrency(currencyName)
});
Then(/^Available services' prices are displayed in (.+)$/, async (currencySymbol) => {
    const retrievedSymbol = await TariffPage.getSelectedCurrency(currencySymbol)
    expect(retrievedSymbol).toHaveText(currencySymbol)
});
When(/^Click on the "Get a consultation" button$/, async()=>{
    await TariffPage.clickOnGetConsultationButton()
});