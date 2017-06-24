import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Switch, Form, Tooltip } from 'antd';

const FormItem = Form.Item;

import {
  setHUDShowMissionInfo, setHUDShowKillInfo, setHUDShowAtBottom,
} from '../../actions';


class HUD extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 12 },
      },
      wrapperCol: {
        sm: { span: 12 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>HUD</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="¬ game.NoMissionInfoHud">Show mission-related messages</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.show_mission_info}
              onChange={this.props.onShowMissionInfoChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="¬ game.noKillInfoHud">Show kill-related messages</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.show_kill_info}
              onChange={this.props.onShowKillInfoChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.lowInfoHud">Show messages at bottom of screen</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.show_at_bottom}
              onChange={this.props.onShowAtBottomChange}
            />
          </FormItem>
        </Form>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return state.config.data.hud;
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onShowMissionInfoChange: (value) => {
      dispatch(setHUDShowMissionInfo(value))
    },
    onShowKillInfoChange: (value) => {
      dispatch(setHUDShowKillInfo(value))
    },
    onShowAtBottomChange: (value) => {
      dispatch(setHUDShowAtBottom(value))
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HUD)
