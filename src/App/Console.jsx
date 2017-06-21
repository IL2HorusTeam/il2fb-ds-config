import React, { Component } from 'react';

import { Collapse, Slider, Switch, Form, InputNumber, Tag, Input, Tooltip, Button } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;


class Connection extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 6 },
      },
      wrapperCol: {
        sm: { span: 4 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label="Port"
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={0}
            min={0}
            max={65000}
          />
        </FormItem>
        <FormItem
          label="Allowed hosts"
          {...formItemLayout}
        >
          <Button size="small" type="dashed">+ New Host</Button>
        </FormItem>
      </Form>
    );
  }

}


class Logging extends Component {

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
        <FormItem>
          <Switch /> Enabled
        </FormItem>
        <FormItem>
          <Switch /> Keep existing log
        </FormItem>
        <FormItem>
          <Switch checked /> Log time
        </FormItem>
        <FormItem
          label="File name"
          {...formItemLayout}
        >
          <Input placeholder="log.lst" />
        </FormItem>
      </Form>
    );
  }

}


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
          label="Number of commands"
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={128}
            min={0}
            max={10000}
          />
        </FormItem>
        <FormItem
          label="Number of records"
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={128}
            min={0}
            max={10000}
          />
        </FormItem>
      </Form>
    );
  }

}


export default class Console extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Server console</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', ]}
        >
          <Panel header="Connection" key="1">
            <Connection />
          </Panel>
          <Panel header="Logging" key="2">
            <Logging />
          </Panel>
          <Panel header="History" key="3">
            <History />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
