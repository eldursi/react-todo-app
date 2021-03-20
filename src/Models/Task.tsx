export enum status
{
    new,
    done
}

export class Task {
    constructor(id: any, name: string, date: Date, status: status){
        this.id = id
        this.name = name
        this.date = date
        this.status = status
    }

    id: any
    name: string = ""
    date: Date | undefined
    status: status
} 
