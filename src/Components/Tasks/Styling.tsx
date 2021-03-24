import { makeStyles, createStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>  createStyles({
    toolbar:{
      minHeight: "3rem"
    } ,
    taskListContainer:{
      padding:0,
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      width: "100%"
    },
    header:{
      height: theme.spacing(8),
    },
    taskListTitleHeader:
    {
      display:"inline-flex",
    },
    taskListTitle:{
      "& h1":{
        fontWeight: "bold",
      },
      "& span":{
        fontSize: "0.7rem",
        color: "#7c7d7d"
      },
      marginLeft: theme.spacing(1.2)
    },
    taskListIcon:{
      marginTop: theme.spacing(0.5),
      color: "#0000008a"
    },
    addNewTaskButton:{
      padding: theme.spacing(0.25),
      color: "#0000008a",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      position: "absolute",
      bottom: "10px"
    },
    addTask:{
      width: theme.spacing(15),
      marginLeft: theme.spacing(1.2),
      borderRadius: "4%"
    },
    addTaskListItem:{
      backgroundColor: "#7bbb5e",
      color:"white",
      textAlign: "center",
      "& *": {
        fontSize: "1.3rem",
      }
    },
    addTaskDialogAction:{
      padding: 0,
      "& button": {
        borderRadius: "0",
      }
    },
    addTaskInput:{
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    },
    taskCheckboxActive:{
      textDecoration: "line-through",
    },
    taskCheckbox:{
    },
    taskDate:{
      fontSize: '0.8rem',
      marginLeft: '2rem',
      color: '#7c7d7d',
      display: 'block',
      marginTop: '-10px'
    },
    overdueMessage:{
      fontSize: '0.8rem',
      color: 'red'
    },
    taskItem:{
      flexDirection:"row",
      width: "100%",
      justifyContent: "space-between"
    },
    taskForm:{
      width: "100%"
    },
    actionButton:{
      color: "#0000008a",
      minWidth:"fit-content"
    }
  })
)

export default useStyles