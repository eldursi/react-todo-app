import { makeStyles, createStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>  createStyles({
    toolbar:{
      minHeight: "3rem"
    } ,
    taskListContainer:{
      padding:0,
      marginLeft: theme.spacing(4)
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
    }
  })
)

export default useStyles