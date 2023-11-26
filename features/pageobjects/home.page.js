import Page from "./page.js";

class HomePage extends Page {

    async clickTariffButton() {
        await $("//li[@id='menu-item-8325']").click();
    }

}

export default new HomePage();