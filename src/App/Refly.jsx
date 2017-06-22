import React, { Component } from 'react';

import { Switch, Form, InputNumber, Tooltip } from 'antd';

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
            label={<Tooltip title="¬ NET.reflyDisabled">Allow refly</Tooltip>}
            {...formItemLayout}
          >
            <Switch checked />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.reflyKIADelay">Death penalty, sec</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              defaultValue={0}
              min={0}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.reflyKIADelayMultiplier">Death penalty multiplier</Tooltip>}
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
            label={<Tooltip title="NET.maxAllowedKIA">Death limit, #</Tooltip>}
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
