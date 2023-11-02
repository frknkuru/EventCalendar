export interface User {
    username: string
    displayName: string
    password: string
    image?: string
}

export interface UserFormValues {
    email: string
    password: string
    displayName?: string
    username?: string
}