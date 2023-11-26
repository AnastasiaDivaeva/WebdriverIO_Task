import {Then} from "@wdio/cucumber-framework";
import DemoRequestPage from "../pageobjects/demo.request.page.js";

Then(/^A page with a demo request opens$/, async () => {
    const requestDemonstrationForm = await DemoRequestPage.getRequestDemonstrationForm();
    expect(requestDemonstrationForm).toBeDisplayed()
});
