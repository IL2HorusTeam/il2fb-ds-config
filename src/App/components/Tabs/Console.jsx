import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Collapse, Switch, Form, InputNumber, Tag, Input, Tooltip, Button } from 'antd';

import {
  toggleConsoleConnectionPort, setConsoleConnectionPort,
  deteleConsoleConnectionAllowedHost,
  addConsoleConnectionAllowedHostStart, addConsoleConnectionAllowedHost,
  setConsoleLoggingEnable, setConsoleLoggingKeepFile, setConsoleLoggingLogTime,
  setConsoleLoggingFileName,
  setConsoleHistoryMaxRecords, setConsoleHistoryMaxCommands,
} from '../../actions';


const FormItem = Form.Item;
const Panel = Collapse.Panel;


class Connection extends Component {

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
      <Form layout="horizontal">
        <FormItem
          label="Allowed"
          {...formItemLayout}
        >
          <Switch
            checked={this.props.port !== null}
            onChange={this.props.onPortToggle}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.IP">Port</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            min={1000}
            max={65000}
            value={this.props.port}
            disabled={this.props.port === null}
            onChange={this.props.onPortChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.IPS">Allowed hosts</Tooltip>}
          {...formItemLayout}
        >
          <div>
            {this.props.allowed_hosts.map((host, index) => {
              const isLong = host.length > 20;
              const tagElem = (
                <Tag
                  key={host}
                  closable={this.props.port !== null}
                  disabled={this.props.port === null}
                  afterClose={() => this.props.onAllowedHostDelete(host)}
                >
                  {
                    isLong
                    ? `${host.slice(0, 20)}...`
                    : host
                  }
                </Tag>
              );
              return (
                isLong
                ? <Tooltip title={host}>{tagElem}</Tooltip>
                : tagElem
              );
            })}
            {this.props.isEditingAllowedHosts && (
              <Input
                autoFocus
                type="text"
                size="small"
                style={{ width: 100 }}
                onBlur={this.props.onAddAllowedHost}
                onPressEnter={this.props.onAddAllowedHost}
              />
            )}
            {!this.props.isEditingAllowedHosts && (
              <Button
                size="small"
                type="dashed"
                disabled={this.props.port === null}
                onClick={this.props.onAddAllowedHostStart}
              >+ New Host</Button>
            )}
          </div>
        </FormItem>
      </Form>
    );
  }

}


const mapStateToPropsConnection = (state, ownProps) => {
  return {
    isEditingAllowedHosts: state.config.isEditingConsoleConnectionAllowedHosts,
    ...state.config.data.console.connection,
  };
}


const mapDispatchToPropsConnection = (dispatch, ownProps) => {
  return {
    onPortToggle: (value) => {
      dispatch(toggleConsoleConnectionPort(value))
    },
    onPortChange: (value) => {
      dispatch(setConsoleConnectionPort(value))
    },
    onAllowedHostDelete: (value) => {
      dispatch(deteleConsoleConnectionAllowedHost(value))
    },
    onAddAllowedHostStart: () => {
      dispatch(addConsoleConnectionAllowedHostStart())
    },
    onAddAllowedHost: (e) => {
      let value = e.target.value.trim();
      dispatch(addConsoleConnectionAllowedHost(value))
    },
  }
}


const ConnectionContainer = connect(
  mapStateToPropsConnection,
  mapDispatchToPropsConnection,
)(Connection)


class Logging extends Component {

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
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="Console.LOG">Enabled</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            checked={this.props.enabled}
            onChange={this.props.onEnableSet}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.LOGKEEP">Keep existing file</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            checked={this.props.keep_file}
            disabled={!this.props.enabled}
            onChange={this.props.onKeepFileSet}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.LOGTIME">Log time</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            checked={this.props.log_time}
            disabled={!this.props.enabled}
            onChange={this.props.onLogTimeSet}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.LOGFILE">File name</Tooltip>}
          {...formItemLayout}
        >
          <Input
            placeholder="log.lst"
            value={this.props.file_name}
            disabled={!this.props.enabled}
            onChange={this.props.onFileNameSet}
          />
        </FormItem>
      </Form>
    );
  }

}


const mapStateToPropsLogging = (state, ownProps) => {
  return state.config.data.console.logging;
}


const mapDispatchToPropsLogging = (dispatch, ownProps) => {
  return {
    onEnableSet: (value) => {
      dispatch(setConsoleLoggingEnable(value))
    },
    onKeepFileSet: (value) => {
      dispatch(setConsoleLoggingKeepFile(value))
    },
    onLogTimeSet: (value) => {
      dispatch(setConsoleLoggingLogTime(value))
    },
    onFileNameSet: (e) => {
      dispatch(setConsoleLoggingFileName(e.target.value))
    },
  }
}


const LoggingContainer = connect(
  mapStateToPropsLogging,
  mapDispatchToPropsLogging,
)(Logging)


class History extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 4 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="Console.HISTORY">Max records</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            value={this.props.max_records}
            min={0}
            max={10000}
            onChange={this.props.onMaxRecordsSet}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.HISTORYCMD">Max commands</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            value={this.props.max_commands}
            min={0}
            max={10000}
            onChange={this.props.onMaxCommandsSet}
          />
        </FormItem>
      </Form>
    );
  }

}


const mapStateToPropsHistory = (state, ownProps) => {
  return state.config.data.console.history;
}


const mapDispatchToPropsHistory = (dispatch, ownProps) => {
  return {
    onMaxRecordsSet: (value) => {
      dispatch(setConsoleHistoryMaxRecords(value))
    },
    onMaxCommandsSet: (value) => {
      dispatch(setConsoleHistoryMaxCommands(value))
    },
  }
}


const HistoryContainer = connect(
  mapStateToPropsHistory,
  mapDispatchToPropsHistory,
)(History)


export default class Console extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Server console</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Connection" key="1">
            <ConnectionContainer />
          </Panel>
          <Panel header="Logging" key="2">
            <LoggingContainer />
          </Panel>
          <Panel header="History" key="3">
            <HistoryContainer />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
