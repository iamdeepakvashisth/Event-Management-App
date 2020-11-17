export class Event {
        id: number
        eventName: string
        description: string
        location: string
        date: string

        constructor(
                id: number,
                eventName: string,
                description: string,
                location: string,
                date: string) {
                this.id = id
                this.eventName = eventName
                this.description = description
                this.location = location
                this.date = date
        }
}
