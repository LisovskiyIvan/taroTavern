import { makeAutoObservable } from "mobx"



 class RequestStore {

    

    constructor() {
        const count = localStorage.getItem('count')
        localStorage.setItem('count', count || '0')
        makeAutoObservable(this)
    }

    setCount(val: number) {
        localStorage.setItem('count', val.toString())
    }

    getCount() {
        const count = localStorage.getItem('count');
        return count ? parseInt(count) : 0;
    }

    increment() {
        localStorage.setItem('count', (this.getCount() + 1).toString());
    }
    
}

const requestStore = new RequestStore
export default requestStore