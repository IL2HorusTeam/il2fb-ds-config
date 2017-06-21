import React, { Component } from 'react';

import { Button } from 'antd';


export default class Export extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Export configuration file</h1>
        <div style={{ textAlign: 'center', }}>
        <Button
          type="primary"
          icon="download"
          size="large"
          style={{ width: '250px', height: '50px', }}
        >Download «confs.ini»</Button>
        </div>
      </div>
    );
  }

}
