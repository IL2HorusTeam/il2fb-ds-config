import React, { Component } from 'react';

import { Collapse, Form, Input, InputNumber, Button, Tooltip } from 'antd';

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Panel = Collapse.Panel;


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
          <Input placeholder="localhost" />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.socksPort">Port</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={1080}
            min={1}
            max={65535}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.socksUser">User</Tooltip>}
          {...formItemLayout}
        >
          <Input placeholder="username" />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.socksPwd">Password</Tooltip>}
          {...formItemLayout}
        >
          <Input placeholder="password" />
        </FormItem>
      </Form>
    );
  }

}


export default class Connection extends Component {

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
            <Input placeholder="localhost" />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.localPort">Port</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={21000}
              min={1}
              max={65535}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.serverChannels">Max clients</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={8}
              min={1}
              max={128}
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
            />
            <Tooltip title="Click to set a predefined value" placement="right">
              <ButtonGroup size="small">
                <Button type="primary">Modem 28.8K</Button>
                <Button type="primary">Modem 56K</Button>
                <Button type="primary">DSL cable</Button>
              </ButtonGroup>
            </Tooltip>
          </FormItem>
        </Form>
        <Collapse
          bordered={false}
        >
          <Panel header="Proxy" key="1">
            <Proxy />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
