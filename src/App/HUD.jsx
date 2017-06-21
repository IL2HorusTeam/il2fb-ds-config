import React, { Component } from 'react';

import { Switch, Form } from 'antd';

const FormItem = Form.Item;


export default class HUD extends Component {

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
            label="Show mission-related messages"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Show kill-related messages"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Show messages at bottom of screen"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
        </Form>
      </div>
    );
  }

}
