import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AppChart from './graph'

export default class InfoCard extends Component {
  render() {
    return (
      <Card>
        <AppChart/>
        <CardTitle title="Chart"/>
      </Card>
    );
  }
}

