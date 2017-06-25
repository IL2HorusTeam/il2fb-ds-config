import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropzone from 'react-dropzone';
import { Icon } from 'react-fa';

import { parseFile } from '../../actions';


class Import extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Import configuration file</h1>
        <div style={{ marginTop: 16, height: 180 }}>
          <Dropzone
            onDrop={this.props.onFileDrop}
            className="dropzone"
            multiple={false}
          >
            <Icon
              name="upload"
              size="5x"
              className="dropzone-icon"
            />
            <p>
              Click or drag configuration file to this area to import
            </p>
          </Dropzone>
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    name: state.config.data.about.name,
    description: state.config.data.about.description,
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFileDrop: (fileArray) => {
      dispatch(parseFile(fileArray[0]));
      return false;
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Import)
