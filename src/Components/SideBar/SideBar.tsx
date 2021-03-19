import { Drawer, Typography } from "@material-ui/core"
import useStyles from "./Styling"
import { TaskCategoryList } from "../TaskCategories/TaskCategories";

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