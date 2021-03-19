export class TaskCategoryItem {
    constructor(id: string, name: string, color: string, numberOfTasks: number, active: boolean){
        this.id = id
        this.name = name
        this.color = color
        this.numberOfTasks = numberOfTasks
        this.active = active
    }

    id: string
    name: string = ""
    color: string = ""
    numberOfTasks: number
    active: boolean
} 