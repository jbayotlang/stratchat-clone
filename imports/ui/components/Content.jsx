import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

// Components
import Header from './Header.jsx';
import LeftSidebar from './LeftSidebar.jsx';
import Room from './Room.jsx';

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  
  // Static First
  staticRooms () {
    return [{
      'name': 'Announcements', 
      'status': 'active'
    }];
  }
  
  render () {
    return (
      <div id="main" className="row">
        <Header />
        <div id="content-container" className="row swatch-2">
          <LeftSidebar />
          <section id="content" className="col-lg-11 col-md-11 col-sm-12 col-xs-12 swatch-5">
            <div id="room-container" className="tab-content row swatch-2">
              <div id="room" className="col-lg-11 col-md-11 col-sm-12 col-xs-12 swatch-5">
                <Room
                  roomsList={this.staticRooms()}
                 />
              </div>
            </div>
          </section> 
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  
};