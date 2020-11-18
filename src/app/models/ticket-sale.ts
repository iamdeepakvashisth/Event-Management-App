export class TicketSale {

    id: number
    eventName: string
    customerEmail: string
    noOfTickets: number

    constructor(
        id: number,
        eventName: string,
        customerEmail: string,
        noOfTickets: number) {
        this.id = id
        this.eventName = eventName
        this.customerEmail = customerEmail
        this.noOfTickets = noOfTickets
    }
}

