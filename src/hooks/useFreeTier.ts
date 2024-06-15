import { UserInfo } from "@vkontakte/vk-bridge";
import { useUser } from "./useUser.ts";



export async function useFreeTier(user: UserInfo) {
    

    const res = await useUser(user)
    
    return res.free_tier

}