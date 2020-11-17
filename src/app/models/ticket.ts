export class Ticket {

    id: number
    eventName: string
    price: string


    constructor(
        id: number,
        eventName: string,
        price: string
    ) {
        this.id = id
        this.eventName = eventName
        this.price = price
    }
}
