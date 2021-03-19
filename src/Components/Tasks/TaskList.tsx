import React from "react"
import Checkbox from '@material-ui/core/Checkbox';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import { Box, Container, FormControl, FormControlLabel, FormGroup, Typography } from "@material-ui/core";
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
        <Container className={classes.taskListContainer} >
            <div className={classes.toolbar} />
            <Box className={classes.header}>
                <Box className={classes.taskListTitleHeader}>
                    <LocalOfferOutlinedIcon />
                    <Typography component="h1" variant="h6" className={classes.taskListTitle}>ToDo List 1</Typography>
                </Box>
                <Typography component="span" variant="subtitle1" style={{display:"block"}}>{tasks.length} tasks</Typography>
            </Box>
            <Box>
                <FormControl>
                    <FormGroup>
                        {tasks.map(t => <TaskCheckbox key={t.id} task={t}/>)}
                    </FormGroup>
                </FormControl>
            </Box>
        </Container>
    )
}

const TaskCheckbox = (props:any) => {
    // displays the task checkbox and task title with the edit and delete option 
    const task: Task = props.task
    return (
        <FormControlLabel
            control={<Checkbox checked={task.status === status.done} name="done" />}
            label={task.name}
        />
    )
}