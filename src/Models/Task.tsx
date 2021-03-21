export enum status
{
    new,
    done
}

export class Task {
    constructor(id: string, name: string, status: status, date?: Date){
        this.id = id
        this.name = name
        this.date = date
        this.status = status
    }

    id: string
    name: string = ""
    date: Date | undefined
    status: status
} 
