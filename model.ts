export interface IUser {
    id: number,
    vkId: number
    name: string
    lastName: string
    free_tier: boolean 
    createdAt:  string
    updatedAt:  string,
    status: string
}
export interface IError {
    status: string
}