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
      fontWeight: "bold",
      marginLeft: theme.spacing(2)
    }
  })
)

export default useStyles