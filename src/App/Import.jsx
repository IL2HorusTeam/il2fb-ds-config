import React, { Component } from 'react';

import { Upload, Icon, message } from 'antd';

const Dragger = Upload.Dragger;


const props = {
  name: 'file',
  multiple: false,
  showUploadList: false,
  // action: '//jsonplaceholder.typicode.com/posts/',
  // onChange(info) {
  // },
};


export default class Import extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Import configuration file</h1>
        <div style={{ marginTop: 16, height: 180 }}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="upload" />
            </p>
            <p className="ant-upload-text">Click or drag configuration file to this area to upload</p>
            <p className="ant-upload-hint">Configuration file is located in the root of server's directory and named «confs.ini»</p>
          </Dragger>
        </div>
      </div>
    );
  }

}
