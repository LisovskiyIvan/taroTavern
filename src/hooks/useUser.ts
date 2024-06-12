import { UserInfo } from "@vkontakte/vk-bridge"

const URL = import.meta.env.VITE_URL

interface User {
    id: number,
    vkId: number
    name: string
    lastName: string
    free_tier: boolean 
    createdAt:  string
    updatedAt:  string,
    status: string
}
interface Error {
    status: string
}

export async function  useUser(user: UserInfo) {
    const isUserExist: User | Error = await fetch(`${URL}/users/${user.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
          }
    }).then(res => res.json())
    if (isUserExist.status != 'success') {
        const newUser = await fetch(`${URL}/users`, {
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
   
}