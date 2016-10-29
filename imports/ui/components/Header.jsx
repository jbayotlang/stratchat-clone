import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

// Components
import Input from './Input.jsx';
import Icon from './Icon.jsx';

export default class Header extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <header id="header" className="row swatch-1">
        <div id="logo-container" className="col-lg-4 col-md-4 col-sm-4 col-xs-5">
          <div className="row middle-lg middle-md middle-sm middle-xs">
            <span id="left-sidebar-icon"></span>
            <a id="logo" href="/"></a>
          </div>
        </div>
        <div id="navigation" className="col-lg-8 col-md-8 col-sm-8 col-xs-7">
          <div className="row middle-lg middle-md middle-sm middle-xs end-lg end-md end-sm end-xs">
            <div id="username-wrapper" className="row">
              <h4 id="change-username">
                <text className="username">Username</text>
                <span id="edit-button"></span>
              </h4>
            </div>
            <div id="edit-wrapper" className="row">
              <Input id="usernameInput" type="text" action="resizeInput" />
              <div id="edit-buttons">
                <span id="save-button"></span>
                <span id="cancel-button"></span>
              </div>
            </div>
            <span id="user-dp"></span>
            <div id="settings">
              <span className="arrow-up"></span>
              <div id="theme-wrapper" className="row">
                <div id="white-theme" className="theme-container active-theme border-circle bg-white"></div>
                <div id="red-theme" className="theme-container bg-red"></div>
                <div id="blue-theme" className="theme-container bg-blue"></div>
                <div id="yellow-theme" className="theme-container bg-yellow"></div>
                <div id="green-theme" className="theme-container bg-green"></div>
                <div className="separator"></div>
                <div id="purple-theme" className="theme-container bg-purple"></div>
                <div id="orange-theme" className="theme-container bg-orange"></div>
                <div id="teal-theme" className="theme-container bg-teal"></div>
                <div id="pink-theme" className="theme-container bg-pink"></div>
                <div id="gray-theme" className="theme-container bg-gray"></div>
              </div>
            </div>
            <button id="logout" className="btn-block" href="#">Logout</button>
          </div>
          <span id="user-status">
            <Icon id="user-status-icon" iconName="status online" />
          </span>
        </div>
      </header> 
     ); 
  }
}

Header.propTypes = {
  
}