import React, { Component } from 'react';

import { Collapse, Form, Input, InputNumber, Button } from 'antd';

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
          label="Host"
          {...formItemLayout}
        >
          <Input placeholder="192.168.0.1" />
        </FormItem>
        <FormItem
          label="Port"
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={1080}
            min={1}
            max={65535}
          />
        </FormItem>
        <FormItem
          label="User"
          {...formItemLayout}
        >
          <Input placeholder="username" />
        </FormItem>
        <FormItem
          label="Password"
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
            label="Host"
            {...formItemLayout}
          >
            <Input placeholder="192.168.0.1" />
          </FormItem>
          <FormItem
            label="Port"
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={21000}
              min={1}
              max={65535}
            />
          </FormItem>
          <FormItem
            label="Max clients"
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={8}
              min={1}
              max={128}
            />
          </FormItem>
          <FormItem
            label="Bandwidth, B/sec"
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={5000}
              min={300}
              max={1000000}
            />
            <ButtonGroup size="small">
              <Button type="primary">Modem 28.8K</Button>
              <Button type="primary">Modem 56K</Button>
              <Button type="primary">DSL cable</Button>
            </ButtonGroup>
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
