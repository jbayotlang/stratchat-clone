import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import ListItem from './ListItem.jsx';

export default class List extends Component {
  constructor (props) {
    super(props);
  }
  
  renderList () {
    let listType;
    let itemStatus;
    let listName = this.props.listName;
    return this.props.listItems.map((item, i) => {
      let index = i;
      switch (listName) {
        case 'groups':
          listType = 'groups';
          itemStatus = item.status;
        case 'users':
          
        case 'status':
          listType = 'status';
          itemStatus = item.name
        default:
          break;
      }
      
      return (
        <ListItem 
          listType={listType}
          indexKey={index}
          status={itemStatus}
          key={index}
        />
      )
    });
  }
  
  render () {
    const id = `${this.props.listName}-list`;
    
    return (
      <ul id={id} className="sidebar-list">
        {this.renderList()}
      </ul>
    )
  }
}

List.propTypes = {
  listItems: PropTypes.array.isRequired,
}