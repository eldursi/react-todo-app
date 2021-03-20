import Checkbox from '@material-ui/core/Checkbox';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import { Box, Container, FormControl, FormControlLabel, FormGroup, Typography } from "@material-ui/core";
import useStyles from "./Styling";
import { Task, status } from "../../Models/Task";

export const TaskList = (props: any) => {
    const activeTaskCategory = props.taskCategories.filter((taskCategory) => {
        return taskCategory.active
      })[0]
    console.log(activeTaskCategory)
    const { tasks, components , icon, name}  = activeTaskCategory
    const IconComponent = components[icon]

    const classes = useStyles()
    return (
        <Container className={classes.taskListContainer} >
            <div className={classes.toolbar} />
            <Box className={classes.header}>
                <Box className={classes.taskListTitleHeader}>
                    <Box className={classes.taskListIcon}>{(IconComponent != null)? <IconComponent/> : <LocalOfferOutlinedIcon/>}</Box>
                    <Box className={classes.taskListTitle}>
                        <Typography component="h1" variant="h6">{name}</Typography>
                        <Typography component="span" variant="subtitle1" style={{display:"block"}}>{tasks.length} tasks</Typography>
                    </Box>
                </Box>
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