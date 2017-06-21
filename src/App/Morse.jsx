import React, { Component } from 'react';

import { Switch, Form } from 'antd';

const FormItem = Form.Item;


export default class Morse extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 10 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>Morse messages</h1>
        <Form layout="horizontal">
          <FormItem
            label="Allow morse as text"
            {...formItemLayout}
          >
            <Switch checked />
          </FormItem>
          <FormItem
            label="Show morse as text"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Block morse chat"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
        </Form>
      </div>
    );
  }

}
