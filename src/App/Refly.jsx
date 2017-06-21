import React, { Component } from 'react';

import { Switch, Form, InputNumber } from 'antd';

const FormItem = Form.Item;


export default class Refly extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>Refly control</h1>
        <Form layout="horizontal">
          <FormItem
            label="Allow refly"
            {...formItemLayout}
          >
            <Switch checked />
          </FormItem>
          <FormItem
            label="Death penalty, sec"
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={0}
              min={0}
            />
          </FormItem>
          <FormItem
            label="Death penalty multiplier"
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={0.0}
              min={0.0}
              precision={1}
              step={0.1}
            />
          </FormItem>
          <FormItem
            label="Death limit, #"
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={-1}
              min={-1}
            />
          </FormItem>
        </Form>
      </div>
    );
  }

}
