import React, { Component } from 'react';

import { Switch, Form, Tooltip } from 'antd';

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
            label={<Tooltip title="NET.allowMorseAsText">Allow morse as text</Tooltip>}
            {...formItemLayout}
          >
            <Switch checked />
          </FormItem>
          <FormItem
          label={<Tooltip title="game.ShowMorseAsText">Show morse as text</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.BlockMorseChat">Block morse chat</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
        </Form>
      </div>
    );
  }

}
