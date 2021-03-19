import { makeStyles, createStyles, Theme } from "@material-ui/core"

const drawerWidth = '19rem';

const useStyles = makeStyles((theme: Theme) =>  createStyles({
    toolbar:{
      minHeight: "3rem"
    },
    header:{
      "& > *": {
        marginLeft: theme.spacing(2.9)
      }
    },
    drawer:{
      width: drawerWidth,
      height: "100vh"
    },
    taskCategories:{
      display: "flex",
      flexWrap: "wrap",
    },
    taskCategoriesContainer:{
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5)
    },
    taskCategory:{
      margin: theme.spacing(1.2),
      width: theme.spacing(15),
      height: theme.spacing(15),
      backgroundColor: "white",
      borderRadius: "3%"
    },
    taskCategoryInactive:{
      backgroundColor: "white",
    },
    taskCategoryActive:{
      backgroundColor: "#ededee"
    },
    addCategory:{
      width: theme.spacing(15),
      marginLeft: theme.spacing(1.2),
      borderRadius: "4%"
    },
    addCategoryListItem:{
      backgroundColor: "#7bbb5e",
      color:"white",
      textAlign: "center",
      "& *": {
        fontSize: "1.3rem",
      }
    },
    addCategoryDialogAction:{
      padding: 0,
      "& button": {
        borderRadius: "0",
      }
    },
    addCategoryInput:{
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    },
    taskCategoryListItem:{
      height: '100%',
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "0.7rem"
    },
    taskCategoryTitle:{
      marginTop: "auto",
      "& *": {
        fontSize: "0.8rem",
        fontWeight: "bold"
      }
    },
    drawerPaper: {
      width: drawerWidth,
      borderRight: "none",
      backgroundColor: "#fafafa"
    }
  })
)

export default useStyles