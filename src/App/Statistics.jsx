import React, { Component } from 'react';

import { Collapse, Switch, Form, InputNumber } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;


class Users extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 10 },
      },
      wrapperCol: {
        sm: { span: 14 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label="Show number"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Show ping"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Show callsign"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Show belligerent"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Show aircraft designation"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Show aircraft type"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Show score"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
      </Form>
    );
  }

}


class Belligerents extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 10 },
      },
      wrapperCol: {
        sm: { span: 14 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label="Show score"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label="Accumulate score"
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
      </Form>
    );
  }

}


export default class Statistics extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 10 },
      },
      wrapperCol: {
        sm: { span: 14 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>Statistics display</h1>
        <Form layout="horizontal">
          <FormItem
            label="Enabled"
            {...formItemLayout}
          >
            <Switch checked />
          </FormItem>
        </Form>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Users" key="1">
            <Users />
          </Panel>
          <Panel header="Belligerents" key="2">
            <Belligerents />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
