import {browser} from '@wdio/globals'

export default class Page {
    async open() {
        return await browser.url(`https://hurma.work/`)
    }
}
