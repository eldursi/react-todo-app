import React from "react"
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl, FormControlLabel, FormGroup } from "@material-ui/core";
import useStyles from "./Styling";

enum status
{
    new,
    done
}

class Task {
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


const tasks = [
    new Task("1", "Task 1", new Date(), status.new),
    new Task("2", "Task 2", new Date(), status.new),
    new Task("3", "Task 3", new Date(), status.new),
    new Task("4", "Task 4", new Date(), status.new),
    new Task("5", "Task 5", new Date(), status.new)
];

export const TaskList = (props: any) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.toolbar} />
            <h1>{props.title}</h1>
            <FormControl>
                <FormGroup>
                    {tasks.map(t => <TaskCheckbox key={t.id} task={t}/>)}
                </FormGroup>
            </FormControl>
        </div>
    )
}

const TaskCheckbox = (props:any) => {
    // displays the task checkbox and task title with the edit and delete option 
    const task: Task = props.task
    return (
        <FormControlLabel
            control={<Checkbox checked={task.status == status.done} name="done" />}
            label={task.name}
        />
    )
}