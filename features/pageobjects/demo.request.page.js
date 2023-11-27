import Page from "./page.js";

class DemoRequestPage extends Page {
    async getRequestDemonstrationForm() {
        return await $("//form[@id='contactUsRequest']");
    }
}

export default new DemoRequestPage();