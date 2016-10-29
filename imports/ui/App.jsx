import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Content from './components/Content.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
   return (
     <div>
      <Content />
     </div>
   );
  }
};

App.propTypes = {
  test: PropTypes.array.isRequired
};

export default createContainer(() => {
  
  return {
    test: [{ hello: "world"}],
  };
}, App);

