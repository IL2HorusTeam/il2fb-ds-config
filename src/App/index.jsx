import React, { Component } from 'react';

import './index.css';


class App extends Component {

  render() {
    return (
      <div>
        Hi there! API base URL: { process.env.API_BASE_URL }
      </div>
    );
  }

}

export default App;
