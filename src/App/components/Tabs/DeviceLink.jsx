import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Collapse, Switch, Form, InputNumber, Tag, Input, Tooltip, Button } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;

import {
  toggleDeviceLinkConnectionPort, setDeviceLinkConnectionPort,
  deteleDeviceLinkConnectionAllowedHost,
  addDeviceLinkConnectionAllowedHostStart, addDeviceLinkConnectionAllowedHost,
  setDeviceLinkConnectionHost,
} from '../../actions';


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
          label={<Tooltip title="DeviceLink.host">Host</Tooltip>}
          {...formItemLayout}
        >
          <Input
            placeholder="localhost"
            value={this.props.host}
            disabled={this.props.port === null}
            onChange={this.props.onHostChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="DeviceLink.port">Port</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            value={this.props.port}
            disabled={this.props.port === null}
            min={1000}
            max={65000}
            onChange={this.props.onPortChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="DeviceLink.IPS">Allowed hosts</Tooltip>}
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
    isEditingAllowedHosts: state.config.isEditingDeviceLinkConnectionAllowedHosts,
    ...state.config.data.device_link.connection,
  };
}


const mapDispatchToPropsConnection = (dispatch, ownProps) => {
  return {
    onPortToggle: (value) => {
      dispatch(toggleDeviceLinkConnectionPort(value))
    },
    onPortChange: (value) => {
      dispatch(setDeviceLinkConnectionPort(value))
    },
    onHostChange: (e) => {
      dispatch(setDeviceLinkConnectionHost(e.target.value))
    },
    onAllowedHostDelete: (value) => {
      dispatch(deteleDeviceLinkConnectionAllowedHost(value))
    },
    onAddAllowedHostStart: () => {
      dispatch(addDeviceLinkConnectionAllowedHostStart())
    },
    onAddAllowedHost: (e) => {
      let value = e.target.value.trim();
      dispatch(addDeviceLinkConnectionAllowedHost(value))
    },
  }
}


const ConnectionContainer = connect(
  mapStateToPropsConnection,
  mapDispatchToPropsConnection,
)(Connection)


export default class DeviceLink extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Device Link interface</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', ]}
        >
          <Panel header="Connection" key="1">
            <ConnectionContainer />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
