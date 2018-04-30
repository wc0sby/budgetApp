import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class NavBar extends Component{
  render(){
    const stylesheet = {
      backgroundColor: '#303030ae',
    }
    return(

      <AppBar
        title={this.props.title}
        style={stylesheet}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
