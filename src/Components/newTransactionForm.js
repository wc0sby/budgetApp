import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Save from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import AppBar from '@material-ui/core/AppBar'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class FormDialog extends Component {

  state = {
    name:'',
    amount: 0,
    date: '',
    category: ''
  }

  postNewTRX = (data)=>{
    const url = "http://localhost:4001/transaction/"
    const fetchObj = {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify(data)
    }

   return fetch(url, fetchObj)
      .then(res => res.json())
      .then(
        (transactions)=>{
        this.setState({trans: transactions})
    })

    this.props.close
  }

  handleFormInput = (e)=>{
    const target = e.target
    const value = target.value
    const name = target.id

    this.setState({
      [name]: value
    })
  }


  render() {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={this.props.isOpen}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
        <AppBar position="static">
          <DialogActions>
            <Button
              onClick={this.props.close} 
            >
            <Icon>close</Icon>
            </Button>
          </DialogActions>
          <DialogTitle id="form-dialog-title">{this.props.name}
          </DialogTitle>
          </AppBar>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Transaction Name"
              type="text"
              onChange={this.handleFormInput}
              fullWidth
            />
            <TextField
              margin="dense"
              id="date"
              label="Transaction Date"
              type="date"
              onChange={this.handleFormInput}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            <TextField
              margin="dense"
              id="amount"
              label="Transaction Amt"
              type="currency"
              onChange={this.handleFormInput}
              fullWidth
            />
            <TextField
              margin="dense"
              id="category"
              label="Budget Category"
              type="text"
              onChange={this.handleFormInput}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button 
              className={classes.button}
              variant="raised" size="small"
              // onClick={this.props.close} 
              color="primary"
              onClick={()=>{
                  this.postNewTRX(this.state)
                  this.props.close()
                }
              }
            >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FormDialog)