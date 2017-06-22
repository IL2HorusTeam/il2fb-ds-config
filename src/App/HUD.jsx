import React, { Component } from 'react';

import { Switch, Form, Tooltip } from 'antd';

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
            label={<Tooltip title="¬ game.NoMissionInfoHud">Show mission-related messages</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="¬ game.noKillInfoHud">Show kill-related messages</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.lowInfoHud">Show messages at bottom of screen</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
        </Form>
      </div>
    );
  }

}
