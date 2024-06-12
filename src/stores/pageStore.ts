import { makeAutoObservable } from "mobx"

class PageStore {
    private page = 'home'

    constructor() {
        makeAutoObservable(this)
    }

    getPage() {
        return this.page
    }

    setPage(v: string) {
        return this.page = v
    }

}

export const pageStore = new PageStore()