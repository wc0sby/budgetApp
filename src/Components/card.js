import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';


export default class CardHold extends Component {
  render() {
    const stylesheet = {
      marginBottom: '10px'
      // height: '300px',
      // width: '350px',
      // borderRadius: '15px',
    }
    return (
      <Card style={stylesheet}>

        <CardTitle title="Chart"/>
      </Card>
    );
  }
}