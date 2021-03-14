import { makeStyles, createStyles, Theme } from "@material-ui/core"

const drawerWidth = '19rem';

const useStyles = makeStyles((theme: Theme) =>  createStyles({
    toolbar:{
      minHeight: "3rem"
    },
    header:{
      "& > *": {
        margin:0,
        paddingLeft: '1rem'
      }
    },
    drawer:{
      width: drawerWidth,
      margin: theme.spacing(1)
    },
    taskCategories:{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    taskCategory:{
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    addCategory:{
      marginLeft: '1rem',
      backgroundColor: "#70c570",
      color:"white",
      width: theme.spacing(16),
    },
    addCategoryListItem:{
      textAlign: "center",
    },
    taskCategoryListItem:{
      height: '100%'
    },
    drawerPaper: {
      width: drawerWidth
    }
  })
)

export default useStyles