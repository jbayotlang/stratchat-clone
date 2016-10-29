import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

// Components
import Header from './Header.jsx';

export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div id="main" className="row">
        <Header />
      </div>
    );
  }
}

Content.propTypes = {
  
};