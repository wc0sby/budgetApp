import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AppChart from './graph'

export default class InfoCard extends Component {
  render() {
    const stylesheet = {
      height: '300px',
      width: '350px',
      borderRadius: '15px',
    }
    return (
      <Card style={stylesheet}>
        <AppChart/>
        <CardTitle title="Chart"/>
      </Card>
    );
  }
}

