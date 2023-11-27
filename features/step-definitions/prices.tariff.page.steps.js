import {Then, When} from "@wdio/cucumber-framework";
import TariffPage from "../pageobjects/tariff.page.js";


When(/^Selects the number of employees (.+)$/, async (numberEmployees) => {
    await TariffPage.selectEmployeesCount(numberEmployees)
});
Then(/^Check that the price for the service is the following (.*)$/, async (expectedPrice) => {
    const actualPrice = await TariffPage.getPriceValue()
    expect(actualPrice).toEqual(expectedPrice)
});