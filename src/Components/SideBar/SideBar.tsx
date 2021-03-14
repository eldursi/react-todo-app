import { Drawer, List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core"
import useStyles from "./Styling"

export const SideBar = () => {
    // date
    // task categories
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
            <TaskCategories />
        </Drawer>
    )

}

const DateToday = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date()
    const dayName = days[today.getDay()]
    const monthName = months[today.getMonth()]

    const classes = useStyles()
    return (
        <div className={classes.header}>
            <h5>{dayName}</h5>
            <h3>{today.getDate().toString()} {monthName}</h3>
        </div>
    )
}

const TaskCategories = () => {
    const classes = useStyles()

    return (
        <>
            <List className={classes.taskCategories}>
                {["ToDo List 1", "ToDo List 2", "ToDo List 3", "ToDo List 4"].map((text, index) => (
                    <Paper key={index} className={classes.taskCategory}>
                        <ListItem button key={text} className={classes.taskCategoryListItem}>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Paper>
                ))}
                
            </List>
            <Paper className={classes.addCategory}>
                <ListItem button className={classes.addCategoryListItem}>
                    <ListItemText primary="+"/>
                </ListItem>
            </Paper>
        </>
    )
}