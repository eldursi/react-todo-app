import { Box, Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@material-ui/core"
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import useStyles from "./Styling"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Guid } from "guid-typescript";
import { TaskCategoryItem } from "../../Models/TaskCategory";

export const SideBar = (props: any) => {
    const taskCategories = props.taskCategories
    const setTaskCategories = props.setTaskCategories
    const classes = useStyles()
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <DateToday />
            <TaskCategoryList taskCategories={taskCategories} setTaskCategories={setTaskCategories} />
        </Drawer>
    )

}

const DateToday = () => {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date()
    const dayName = days[today.getDay()]
    const monthName = months[today.getMonth()]

    const classes = useStyles()
    return (
        <div className={classes.header}>
            <Typography component="span" style={{fontSize:"0.7rem", color:"#7c7d7d"}}>{dayName}</Typography>
            <Typography component="h3" variant="h6" style={{fontWeight:"bold"}}>{today.getDate().toString()} {monthName}</Typography>
        </div>
    )
}

const TaskCategoryList = (props: any) => {
    const classes = useStyles()
    const taskCategories = props.taskCategories
    const setTaskCategories = props.setTaskCategories
    console.log(taskCategories)
    return (
        <Container className={classes.taskCategoriesContainer}>
            <List className={classes.taskCategories}>
                <Box className={classes.taskCategory} boxShadow={1}>
                    <ListItem button className={classes.taskCategoryListItem}>
                        <Box>
                            <ListItemIcon>
                                <BookmarkBorderIcon style={{height: "1.2rem"}}/>
                            </ListItemIcon>
                        </Box>
                        <Box className={classes.taskCategoryTitle}>
                            <ListItemText primary={"Today"} />
                        </Box>
                    </ListItem>
                </Box>
                {taskCategories.map((taskCategory, index) => (
                    <TaskCategory text={taskCategory.name} numberOfTasks={taskCategory.numberOfTasks} key={index} />
                ))}
                
            </List>
            <Box className={classes.addCategory}>
                <NewTaskCategory taskCategories={taskCategories} addTaskCategory={setTaskCategories} />
                
            </Box>
        </Container>
    )
}

const TaskCategory = (props:any) =>
{
    const classes = useStyles()

    return (
        <Box className={classes.taskCategory} boxShadow={1}>
            <ListItem button className={classes.taskCategoryListItem}>
                <Box>
                    <ListItemIcon>
                        <LocalOfferOutlinedIcon style={{height: "1.2rem"}}/>
                    </ListItemIcon>
                </Box>
                <Box className={classes.taskCategoryTitle}>
                    <ListItemText primary={props.text} />
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
        const id = Guid.create().toString()
        const newCategory = new TaskCategoryItem(id, listName, "", 0, false)                
        addTaskCategory(oldTaskCategories => [...oldTaskCategories, newCategory])

        setOpen(false)
    }

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen} fullWidth className = {classes.addCategoryListItem}>
                +
            </Button>
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
                    <Button onClick={addCategory} color="primary" fullWidth className = {classes.addCategoryListItem}>
                        +
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );      
}