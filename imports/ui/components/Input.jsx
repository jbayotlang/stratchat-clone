import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <input />
    )
  }
}

Input.propTypes = {
  
};