import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@material-ui/core"
import React from "react"
import useStyles from "../Tasks/Styling"

const InputDialog = (props:any) =>
{
    const classes = useStyles()
    const {open, handleClose, handleOnClick, title, buttonText, handleOnChange, value} = props
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="text"
                    fullWidth
                    multiline
                    rows={10}
                    InputProps= {{ className: classes.addTaskInput}}
                    onChange={(e) => { handleOnChange(e.target.value) }}
                    defaultValue={ value }
                />
            </DialogContent>
            <DialogActions className = {classes.addTaskDialogAction}>
                <Button onClick={handleOnClick} color="primary" fullWidth className = {classes.addTaskListItem}>
                {buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default InputDialog