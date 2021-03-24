import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Grid } from "@material-ui/core"
import useStyles from "../Tasks/Styling"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";

export const InputDialog = (props:any) =>
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

export const DateDialog = (props:any) => 
{
    const classes = useStyles()
    const {open, handleClose, handleOnClick, buttonText, handleOnChange, value} = props
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
            <DialogContent>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify='space-around'>
                        <KeyboardDatePicker
                            disableToolbar
                            variant='static'
                            format='MM/dd/yyyy'
                            margin='normal'
                            id='date-picker'
                            label='Date Picker'
                            value={value}
                            onChange={handleOnChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                            />
                    </Grid>
                </MuiPickersUtilsProvider>

            </DialogContent>
            <DialogActions className = {classes.addTaskDialogAction}>
                <Button onClick={handleOnClick} color="primary" fullWidth className = {classes.addTaskListItem}>
                {buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

