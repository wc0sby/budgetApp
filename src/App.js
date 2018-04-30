import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/nav';
import Transactions from './Components/table';
import InfoCard from './Components/infoCard'
// import AppChart from './Components/graph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar title="Budget"/>
        {/* <header className="App-header">
          <h1>Budget App</h1>
        </header> */}
        <div className="main-container">
          {/* container for charts and data */}
          <section className="chart-container">
            {/* container for charts */}
              <InfoCard/>
              <InfoCard/>
              <InfoCard/>
            {/* <article className="chart">
            </article>
            <article className="chart">
              <InfoCard/>
            </article>
              <InfoCard/>
            <article className="chart">
            </article> */}
          </section>
          <section className="data-container">
            <nav className="data-tabs">

            </nav>
            <article className="data">
              <Transactions/>
            </article>
          </section>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
