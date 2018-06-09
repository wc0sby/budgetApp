import React, { Component } from 'react'
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import Table from './table'


export default class TabHeader extends Component{
  state = {
    value: 0
  }

  handleChange = (e, value)=>{
    this.setState({ value })
  }

  render(){
    const {value} = this.state
    return (
      <div>
        <AppBar position="static" style={{background: "#303030ae"}}>
        <Tabs
          value = {value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          centered={true}
          fullWidth={true}
        >
          <Tab label="Main" />
          <Tab label="Cash" />
          <Tab label="Budget" />
        </Tabs>
        </AppBar>
      <Paper style={{width:'96%', marginLeft: '2%'}}>
        {value === 0 && <Table />}
        {value === 1 && <Paper> Hi </Paper>}
        {value === 2 && <Paper> Great </Paper>}
      </Paper>
      </div>
    )}
}