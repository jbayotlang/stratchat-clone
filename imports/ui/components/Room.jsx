import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Room extends Component {
  constructor (props) {
    super(props);
  }
  
  renderRooms () {
    return this.props.roomsList.map((room, i) => {
      let id = `groups_${i}`;
      let klass = 'room-content col-lg-12 col-md-12 col-sm-12 col-xs-12';
      const roomDisplayPhoto = {background: "url('/assets/imgs/icons/group.png') center center no-repeat"};
      
      if (room.status) {
        klass += ` ${room.status}`;
      }
      
      return (
        <div id={id} className={klass}>
          <div className="room-heading row middle-lg middle-md middle-sm middle-xs swatch-4">
            <span id="room-dp" style={roomDisplayPhoto} />
            <span id="room-details">
              <h4 className="room-title">{room.name}</h4>
              <p>Number of people joined this group</p>
            </span>
            <div id="font-resizer">
						</div>
            <span id="groups-users-list-icon" className="online" />
          </div>
          <div id="messages-container" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            ChatMessages
          </div>
        </div>
      )
    });
  }
  
  render () {
    console.log(this.renderRooms());
    return (
      <div id="doesnt-make-sense">
       {this.renderRooms()}
      </div>
    )
  }
}

Room.propTypes = {
  
}