import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Icon extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    var icon;
    var iconId;
    
    // What's this???!!!
    if(this.props.id !== null) {
  		iconId = this.props.id;
  	}
  	if(this.props.iconName === "status" || this.props.id === "user-status-icon") {
  		icon = "icon icon-" + this.props.iconName + " swatch-5";
  	} else if(this.props.iconName === "user-dp") {
  		icon = "icon";
    }
    
    return (
      <span id={iconId} className={icon} style={this.props.iconStyle}>
        {this.props.children}
      </span>
    );
  }
}

Icon.propTypes = {
  
}