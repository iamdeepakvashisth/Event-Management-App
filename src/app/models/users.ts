export class Users {
    id: number
    first_name: string
    last_name:string
    email: string
    password: string
    isAdmin:boolean

    constructor(
        id: number, first_name: string, last_name, email: string, password:string, isAdmin:boolean) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.password= password
        this.isAdmin=isAdmin
    }
}