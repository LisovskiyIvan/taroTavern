import { UserInfo } from "@vkontakte/vk-bridge"
import {IUser} from '../../model.ts'

const URL = import.meta.env.VITE_URL



export async function  useUser(user: UserInfo): Promise<IUser> {
    const userData: IUser  = await fetch(`${URL}/users/${user.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
          }
    }).then(res => res.json())
    if (userData.status == 'success') return userData
        const newUser: IUser = await fetch(`${URL}/users`, {
            method: "POST",
            body: JSON.stringify({
                vkId: user.id,
                name: user.first_name,
                lastName: user.last_name
              }),
              headers: {
                "Content-Type": "application/json"
              }
        }).then(res => res.json())
        return newUser
    
   
}