import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Collapse, Form, Input, InputNumber, Button, Tooltip, Slider } from 'antd';

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Panel = Collapse.Panel;

import {
  setConnectionProxyHost, setConnectionProxyPort, setConnectionProxyUser,
  setConnectionProxyPassword,

  setConnectionHost, setConnectionPort, setConnectionMaxClients,
  setConnectionBandwidth,
} from '../../actions';


class Proxy extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 20 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="NET.socksHost">Host</Tooltip>}
          {...formItemLayout}
        >
          <Input
            placeholder="localhost"
            value={this.props.host}
            onChange={this.props.onHostChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.socksPort">Port</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            min={1000}
            max={65000}
            value={this.props.port}
            onChange={this.props.onPortChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.socksUser">User</Tooltip>}
          {...formItemLayout}
        >
          <Input
            placeholder="username"
            value={this.props.user}
            onChange={this.props.onUserChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.socksPwd">Password</Tooltip>}
          {...formItemLayout}
        >
          <Input
            placeholder="password"
            type="password"
            value={this.props.password}
            onChange={this.props.onPasswordChange}
          />
        </FormItem>
      </Form>
    );
  }

}


const mapStateToPropsProxy = (state, ownProps) => {
  return state.config.data.connection.proxy;
}


const mapDispatchToPropsProxy = (dispatch, ownProps) => {
  return {
    onHostChange: (e) => {
      dispatch(setConnectionProxyHost(e.target.value))
    },
    onPortChange: (value) => {
      dispatch(setConnectionProxyPort(value))
    },
    onUserChange: (e) => {
      dispatch(setConnectionProxyUser(e.target.value))
    },
    onPasswordChange: (e) => {
      dispatch(setConnectionProxyPassword(e.target.value))
    },
  }
}


const ProxyContainer = connect(
  mapStateToPropsProxy,
  mapDispatchToPropsProxy,
)(Proxy)


const maxClientsMarks = {
  1: '1',
  8: '8',
  16: '16',
  24: '24',
  32: '32',
  48: '48',
  64: '64',
  96: '96',
  128: '128',
};


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
      <div className="tab-pane">
        <h1>Player connection</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="NET.localHost">Host</Tooltip>}
            {...formItemLayout}
          >
            <Input
              placeholder="localhost"
              value={this.props.host}
              onChange={this.props.onHostChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.localPort">Port</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={21000}
              min={1000}
              max={65000}
              value={this.props.port}
              onChange={this.props.onPortChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.serverChannels">Max clients</Tooltip>}
            {...formItemLayout}
          >
            <Slider
              min={1}
              max={128}
              step={1}
              value={this.props.max_clients}
              onChange={this.props.onMaxClientsChange}
              marks={maxClientsMarks}
              tipFormatter={value => `NET.serverChannels=${value}`}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.speed">Bandwidth, B/sec</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={5000}
              min={300}
              max={1000000}
              value={this.props.bandwidth}
              onChange={this.props.onBandwidthChange}
            />
            <Tooltip title="Click to set a predefined value" placement="right">
              <ButtonGroup size="small">
                <Button
                  type="primary"
                  onClick={this.props.onModem28800Click}
                >Modem 28.8K</Button>
                <Button
                  type="primary"
                  onClick={this.props.onModem56000Click}
                >Modem 56K</Button>
                <Button
                  type="primary"
                  onClick={this.props.onDSLCableClick}
                >DSL cable</Button>
              </ButtonGroup>
            </Tooltip>
          </FormItem>
        </Form>
        <Collapse
          bordered={false}
        >
          <Panel header="Proxy" key="1">
            <ProxyContainer />
          </Panel>
        </Collapse>
      </div>
    );
  }

}


const mapStateToPropsConnection = (state, ownProps) => {
  return {
      host: state.config.data.connection.host,
      port: state.config.data.connection.port,
      max_clients: state.config.data.connection.max_clients,
      bandwidth: state.config.data.connection.bandwidth,
  };
}


const mapDispatchToPropsConnection = (dispatch, ownProps) => {
  return {
    onHostChange: (e) => {
      dispatch(setConnectionHost(e.target.value))
    },
    onPortChange: (value) => {
      dispatch(setConnectionPort(value))
    },
    onMaxClientsChange: (value) => {
      dispatch(setConnectionMaxClients(value))
    },
    onBandwidthChange: (value) => {
      dispatch(setConnectionBandwidth(value))
    },
    onModem28800Click: () => {
      dispatch(setConnectionBandwidth(3000))
    },
    onModem56000Click: () => {
      dispatch(setConnectionBandwidth(5000))
    },
    onDSLCableClick: () => {
      dispatch(setConnectionBandwidth(25000))
    },
  }
}


export default connect(
  mapStateToPropsConnection,
  mapDispatchToPropsConnection,
)(Connection)
