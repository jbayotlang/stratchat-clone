import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import List from './List.jsx';

export default class LeftSideBar extends Component {
  constructor (props) {
    super(props);
  }
  
  // Static First
  staticGroups () {
    return [{
      'name': 'Announcements', 
      'status': 'active'
    }];
  }
  
  render () {
    return (
      <section id="sidebar" className="col-lg-2 col-md-2 col-sm-12 col-xs-12 swatch-2">
        <div id="sidebar-lists-container" className="row">
          <h5>
            <span className="groups-icon" />
            Groups
            <span id="add-group" />
          </h5>
          <List 
            listName="groups" 
            listItems={this.staticGroups()}
          />
        </div>
      </section>    
    )
  }
}

LeftSideBar.propTypes = {
  
}