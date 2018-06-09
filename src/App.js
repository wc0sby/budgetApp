import React, { Component } from 'react'
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './Components/nav'
// import Transactions from './Components/table'
import InfoCard from './Components/infoCard'
import Tabs from './Components/tabs'
import Card from './Components/card'
import Grid from '@material-ui/core/Grid';
import AddButton from './Components/Buttons/addItem.js'
import NewTRX from './Components/newTransactionForm'

class App extends Component {
  state = {
    formOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ formOpen: true });
  };

  handleFormClose = () => {
    this.setState({ formOpen: false });
  };

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
                spacing={12}
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
                spacing={12}
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
                spacing={12}
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
            <Card/>
          </Grid>
          <Grid item xs>
            <Card/>
          </Grid>
          <Grid item xs>
            <Card/>
          </Grid>
          <Grid item xs>
            <Card/>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs>
            <Tabs/>
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
