import React, { Component } from 'react';

import './index.css';


class App extends Component {

  render() {
    return (
      <div>
        Hi there! API host: { process.env.API_HOST }
      </div>
    );
  }

}

export default App;
