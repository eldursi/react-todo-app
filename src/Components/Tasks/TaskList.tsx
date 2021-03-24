import Checkbox from '@material-ui/core/Checkbox';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import { Box, Button, FormControl, FormControlLabel, FormGroup, Typography } from "@material-ui/core";
import useStyles from "./Styling";
import { Task, status } from "../../Models/Task";
import { useState } from 'react';
import { Guid } from 'guid-typescript';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import { InputDialog, DateDialog } from '../Shared/InputDialog';
import DeleteIcon from '@material-ui/icons/Delete';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { GetMonth } from "../Shared/Date";

export const TaskList = (props: any) => {
    const taskCategories = props.taskCategories
    console.log("in TaskList")
    console.log(taskCategories)
    const activeTaskCategory = taskCategories.filter((taskCategory) => {
        return taskCategory.active
      })[0]
    const { tasks, components , icon, name}  = activeTaskCategory
    const IconComponent = components[icon]

    const handleTaskListUpdate = (tasks: Task[]) => {
        console.log("in handleTaskListUpdate")
        activeTaskCategory.tasks = tasks
        console.log(tasks)

        taskCategories.forEach(taskCategory => {
            if(taskCategory.id === activeTaskCategory.id)
            {
                taskCategory = activeTaskCategory
                props.setTaskCategories([...taskCategories])
            }
        });
    }

    const classes = useStyles()
    return (
        <div className={classes.taskListContainer} >
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
                <FormControl className={classes.taskForm}>
                        {tasks.map((t) =>(
                            <FormGroup className={classes.taskItem} key={t.id} >
                                 <TaskItem task={t} tasks={tasks} setTasks={handleTaskListUpdate}/>
                            </FormGroup>

                        ))}
                </FormControl>
            </Box>
            <Box>
                <NewTask addTask={handleTaskListUpdate} tasks={tasks}/>
            </Box>        
        </div>
    )
}

const TaskItem = (props:any) => {
    const { task, setTasks, tasks } = props
    const handleTaskUpdate = (task: Task) => {
        tasks.forEach(taskElement => {
            if(taskElement.id === task.id)
            {
                console.log(task)
                taskElement = task
                setTasks(tasks)
            }
        });
    }
    return (
        <>
            <TaskCheckbox task={task} tasks={tasks} updateTask={handleTaskUpdate} setTasks={setTasks}/>
        </>
    )
}

const TaskCheckbox = (props:any) => {
    const [checked, setChecked] = useState(props.task.status === status.done);
    // displays the task checkbox and task title with the edit and delete option 
    const task  = props.task
    const classes = useStyles()
    const taskDate = task.date ? `${task.date.getDate()} ${GetMonth(task.date)}` : ""
    const overdue = task.date < new Date()
    const handleOnChange = (event:any) => {
        if(event.target.checked)
        {
            task.status = status.done
            setChecked(true)
        }
        else{
            task.status = status.new
            setChecked(false)
        }
        props.updateTask(task)
    }
    const checkboxClass = checked ? classes.taskCheckboxActive: classes.taskCheckbox
    return (
        <>
            <Box>
                <FormControlLabel
                    control={
                    <Checkbox onChange={handleOnChange} checked={checked}
                        name="done" />
                    }
                    className={checkboxClass}
                    label={task.name}
                />
                <Typography component="span" variant="subtitle1" className={classes.taskDate}>{overdue && <b className={classes.overdueMessage}>Overdue: </b>} {taskDate}</Typography>
            </Box>
            <Box>
                <EditTask task={task} updateTask={props.updateTask}/>
                <DeleteTask task={task} tasks={props.tasks} setTasks={props.setTasks}/>
                <SetTaskDate task={task} updateTask={props.updateTask}/>
            </Box>
        </>
    )
}

const SetTaskDate = (props:any) => {
    const { task, updateTask } = props
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event:any) => {
        console.log("in handleOnChange")
        setDate(event)
    }
    const handleClick = (event:any) => {
        task.date=date
        updateTask(task)
        handleClose()
        console.log("in handleClick, date is "+ task.date.toString())
    }

    return (
        <>
            <SetTaskDateButton handleOnClick={handleClickOpen}/>
            <DateDialog open={open} handleClose={handleClose} handleOnChange={handleChange} handleOnClick={handleClick} buttonText={"Save"} value={date}/>
        </>
    );     
}

const SetTaskDateButton = (props:any) => {
    const classes = useStyles();
    return (
        <Button onClick={props.handleOnClick} startIcon={<CalendarTodayIcon/>} className={classes.actionButton}/>
    )
}

const NewTask = (props:any) => {
    const [open, setOpen] = useState(false);
    const [taskName, setTaskName] = useState("");
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const addTaskItem = () => 
    {
        const { addTask, tasks }= props
        const newTask = new Task(
            Guid.create().toString(),
            taskName,
            status.new)   
        tasks.push(newTask)
        addTask(tasks)
        handleClose()
    }

    return (
        <>
            <AddTaskButton handleOnClick={handleClickOpen}/>
            <InputDialog open={open} handleClose={handleClose} handleOnChange={setTaskName} handleOnClick={addTaskItem} buttonText={"+"} title={"New task"}/>
        </>
    );      
}

const AddTaskButton = (props:any) => {
    const classes = useStyles();
    return (
        <Button onClick={props.handleOnClick} startIcon={<AddBoxIcon/>} className={classes.addNewTaskButton}>
            Add New Task
        </Button>
    )
}

const EditTask = (props:any) => {
    const { task, updateTask } = props
    const [open, setOpen] = useState(false);
    const [taskName, setTaskName] = useState(task.name);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event:any) => {
        console.log("in handleOnChange")
        setTaskName(event)
    }
    const handleClick = (event:any) => {
        task.name=taskName
        updateTask(task)
        handleClose()
    }

    return (
        <>
            <EditTaskButton handleOnClick={handleClickOpen}/>
            <InputDialog open={open} handleClose={handleClose} handleOnChange={handleChange} handleOnClick={handleClick} buttonText={"Save"} title={"Edit task"} value={taskName}/>
        </>
    );     
}

const EditTaskButton = (props:any) => {
    const classes = useStyles();
    return (
        <Button onClick={props.handleOnClick} startIcon={<EditIcon/>} className={classes.actionButton}/>
    )
}

const DeleteTask = (props:any) => {
    const classes = useStyles();
    const { task, tasks, setTasks } = props
    const handleOnClick = () => {
        const updatedTasks = tasks.filter(function(element){ 
            return element.id !== task.id; 
        });
        setTasks(updatedTasks)
    }

    return (
        <Button onClick={handleOnClick} startIcon={<DeleteIcon/>} className={classes.actionButton}/>
    );     
}

