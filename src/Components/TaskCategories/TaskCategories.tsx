import useStyles from "../SideBar/Styling"
import { Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@material-ui/core"
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Guid } from "guid-typescript";
import { useState } from "react";
import { TaskCategoryItem } from "../../Models/TaskCategoryItem";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export const TaskCategoryList = (props: any) => {
    const classes = useStyles()
    const taskCategories = props.taskCategories
    const setTaskCategories = props.setTaskCategories
    console.log(taskCategories)            
    return (
        <Container className={classes.taskCategoriesContainer}>
            <List className={classes.taskCategories}>
                {taskCategories.map((taskCategory, index) => {
                    const taskCategoryIcon = taskCategory.components[taskCategory.icon]
                    return (<TaskCategory 
                        active={taskCategory.active}
                        name={taskCategory.name} 
                        numberOfTasks={taskCategory.numberOfTasks} 
                        icon={taskCategoryIcon} 
                        key={index} />)
                })}
            </List>
            <Box className={classes.addCategory}>
                <NewTaskCategory taskCategories={taskCategories} addTaskCategory={setTaskCategories} />  
            </Box>
        </Container>
    )
}

export const TaskCategory = (props:any) =>
{
    const classes = useStyles()
    const Icon = props.icon
    return (
        <Box 
        className={`${classes.taskCategory} ${props.active ? classes.taskCategoryActive: classes.taskCategoryInactive}`} 
        boxShadow={props.active ? 0 : 1}>
            <ListItem button className={classes.taskCategoryListItem}>
                <Box>
                    <ListItemIcon>
                        {(Icon != null)? <Icon /> : <LocalOfferOutlinedIcon style={{height: "1.2rem"}}/>}
                    </ListItemIcon>
                </Box>
                <Box className={classes.taskCategoryTitle}>
                    <ListItemText primary={props.name} />
                    <Typography component="span" style={{fontSize:"0.7rem", color:"#7c7d7d"}}>{props.numberOfTasks} tasks</Typography>
                </Box>
            </ListItem>
        </Box>
    )
}

const NewTaskCategory = (props:any) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [listName, setListName] = useState("");
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const addCategory = () => 
    {
        const addTaskCategory = props.addTaskCategory
        const newCategory = new TaskCategoryItem(
            Guid.create().toString(),
            listName,
            "",
            0,
            false)                
        addTaskCategory(oldTaskCategories => [...oldTaskCategories, newCategory])
        handleClose()
    }

    return (
        <div>
            <AddCategoryButton handleOnClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">New List</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        fullWidth
                        multiline
                        rows={10}
                        InputProps= {{ className: classes.addCategoryInput}}
                        onChange={(e) => { setListName(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions className = {classes.addCategoryDialogAction}>
                    <AddCategoryButton handleOnClick={addCategory}/>
                </DialogActions>
            </Dialog>
        </div>
    );      
}

const AddCategoryButton = (props:any) => {
    const classes = useStyles();
    return (
        <Button onClick={props.handleOnClick} color="primary" fullWidth className = {classes.addCategoryListItem}>
        +
        </Button>
    )
}