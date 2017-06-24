import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Collapse, Slider, Switch, Form, Input, Tooltip } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;

import {
  setEventsChatLevel, setEventsLoggingKeepFile, setEventsLoggingLogBuildings,
  setEventsLoggingFileName,
} from '../../actions';


const chatLevelMarks = {
  0: 'Minimal',
  1: 'Verbose',
  2: 'Chatty',
  3: 'Full',
};


class Events extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 6 },
      },
      wrapperCol: {
        sm: { span: 18 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>Events</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Verbosity in game chat" key="1">
            <Slider
              min={0}
              max={3}
              step={null}
              value={this.props.chat_level}
              marks={chatLevelMarks}
              tipFormatter={value => `chat.autoLogDetail=${value}`}
              onChange={this.props.onChatLevelChange}
            />
          </Panel>
          <Panel header="Log file" key="2">
            <Form layout="horizontal">
              <FormItem
                label={<Tooltip title="game.eventlogkeep">Keep existing file</Tooltip>}
                {...formItemLayout}
              >
                <Switch
                  checked={this.props.logging.keep_file}
                  onChange={this.props.onLoggingKeepFileChange}
                />
              </FormItem>
              <FormItem
                label={<Tooltip title="game.eventlogHouse">Log buildings</Tooltip>}
                {...formItemLayout}
              >
                <Switch
                  checked={this.props.logging.log_buildings}
                  onChange={this.props.onLoggingLogBuildingsChange}
                />
              </FormItem>
              <FormItem
                label={<Tooltip title="game.eventlog">File name</Tooltip>}
                {...formItemLayout}
              >
                <Input
                  placeholder="eventlog.lst"
                  value={this.props.logging.file_name}
                  onChange={this.props.onLoggingFileNameChange}
                />
              </FormItem>
            </Form>
          </Panel>
        </Collapse>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return state.config.data.events;
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChatLevelChange: (value) => {
      dispatch(setEventsChatLevel(value))
    },
    onLoggingKeepFileChange: (value) => {
      dispatch(setEventsLoggingKeepFile(value))
    },
    onLoggingLogBuildingsChange: (value) => {
      dispatch(setEventsLoggingLogBuildings(value))
    },
    onLoggingFileNameChange: (e) => {
      dispatch(setEventsLoggingFileName(e.target.value))
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events)
