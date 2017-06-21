import React, { Component } from 'react';

import { Switch, Form, InputNumber } from 'antd';

const FormItem = Form.Item;


export default class Miscellaneous extends Component {

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
        <h1>Miscellaneous options</h1>
        <Form layout="horizontal">
          <FormItem
            label="Difficulty"
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={0}
              min={0}
              size={14}
            />
          </FormItem>
          <FormItem
            label="Display custom skins"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Allow custom sounds"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Filter user names"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Small way point labels"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Skip paratrooper views"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label="Use new clouds rendering"
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
        </Form>
      </div>
    );
  }

}
