import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  // Kinda off right?
  enterRoom (index) {
    // const clicked = ReactDOM.findDOMNode(this.refs.)
  }
  
  setItems () {
    let settings = {};
    switch (this.props.listType) {
      case 'status':
        settings.tabId = `#${this.props.listType}_${this.props.indexKey}`;
        settings.listItemEvent = null;
        break;    
      case 'groups':
        settings.class = "";
      case 'users':
      default:
        break;
    }
    
    return settings;
  }
  
  render () {
    let items = this.setItems();
    
    return (
      <li className={items.itemClass} >
        {this.props.status}
      </li>
    )  
  }
}

ListItem.propTypes = {
  
}