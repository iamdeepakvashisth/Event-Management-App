export class Event {
        id: number
        eventName: string
        description: string
        location: string
        startdate: any
        enddate:any
        price:number

        constructor(
                id: number,
                eventName: string,
                description: string,
                location: string,
                startdate: any,
                enddate:any,
                price:number) {
                this.id = id
                this.eventName = eventName
                this.description = description
                this.location = location
                this.startdate = startdate
                this.enddate=enddate
                this.price=price
        }
}
