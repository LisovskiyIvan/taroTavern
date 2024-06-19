import {makeAutoObservable} from "mobx"

class UserStatusStore {


    constructor() {
        const userStatus = localStorage.getItem('free_tier')
        localStorage.setItem('free_tier', userStatus || 'false')
        makeAutoObservable(this)
    }

    setUserStatus(val: string) {
        localStorage.setItem('free_tier', val)
    }

    getUserStatus() {
        const userStatus = localStorage.getItem('free_tier');
        return userStatus || 'false';
    }


}


const userStatusStore = new UserStatusStore
export default userStatusStore