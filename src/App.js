import React, { Component } from 'react'
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './Components/nav'
import InfoCard from './Components/infoCard'
import Tabs from './Container/Presentational/TransactionContainer'
import Card from './Components/card'
import Grid from '@material-ui/core/Grid';
import AddButton from './Components/Buttons/addItem.js'
import NewTRX from './Container/Functional/FormContainer'

class App extends Component {
  state = {
    formOpen: false,
    value: ''
  };

  componentDidMount(){

    this.props.fetchMain()
    this.props.fetchCash()
    this.props.fetchBudget()

  }

  handleFormOpen = () => {
    this.setState({ formOpen: true });
  };

  handleFormClose = () => {
    this.setState({ formOpen: false });
  };

  handleTabChange = (e, value)=>{
    this.setState({ value })
  }

  render() {
    const Style = {
      chartGrid: {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
      }
    }
    return (
        <MuiThemeProvider>
      <div >
          <NavBar title="Budget"/>
        {/* <header className="App-header">
          <h1>Budget App</h1>
        </header> */}
        <div className="main-container">
        {/* <div style={{ margin: '0 5%', flex: 1, justifyContent: 'center'}}> */}
          <Grid 
            container spacing={24}
            // style={{flexGrow:1}}
          >
            {/* container for charts and data */}
            {/* <section className="chart-container"> */}
              {/* container for charts */}
            <Grid item xs>
              <Grid 
                container
                spacing={16}
                alignItems={Style.chartGrid.alignItems}
                direction={Style.chartGrid.direction}
                justify={Style.chartGrid.justify}
              >
                <Grid item>
                  <InfoCard/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid 
                container
                spacing={16}
                alignItems={Style.chartGrid.alignItems}
                direction={Style.chartGrid.direction}
                justify={Style.chartGrid.justify}
              >
                <Grid item>
                  <InfoCard/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid 
                container
                spacing={16}
                alignItems={Style.chartGrid.alignItems}
                direction={Style.chartGrid.direction}
                justify={Style.chartGrid.justify}
              >
                <Grid item>
                  <InfoCard/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        {/* </div> */}

        <Grid container spacing={24}>
          <Grid item xs>
            <Card
              title="Balance"
              data={this.state.trans}
            />
          </Grid>
          <Grid item xs>
            <Card
            title="Date"
            data={new Date().toDateString()}
            />
          </Grid>
          <Grid item xs>
            <Card
            title="Message"
            data={'You can do it!!!'}
            />
          </Grid>
          <Grid item xs>
            <Card
            title="Free Spending"
            data={this.state.budget}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs>
            <Tabs 
              main = {this.state.trans}
              cash = {this.state.cash}
              budget = {this.state.budget}
              value = {this.state.value}
              handleTabChange = {this.handleTabChange}
            />
          </Grid>
          <AddButton
            handleOpen={this.handleFormOpen}
          />
          <NewTRX 
            name='Add Transaction'
            isOpen={this.state.formOpen}
            close={this.handleFormClose}
          />
        </Grid>

        </div>
      </div>
        </MuiThemeProvider>
    );
  }
}
export default App;
