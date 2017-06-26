import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';

import { exportConfig } from '../../actions';


class Export extends Component {

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
          onClick={() => {this.props.onExportClick(this.props.data)}}
        >Export configuration file</Button>
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    data: state.config.data,
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onExportClick: (data) => {
      dispatch(exportConfig(data));
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Export)
