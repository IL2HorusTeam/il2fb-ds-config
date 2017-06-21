import React, { Component } from 'react';

import { Switch, Form } from 'antd';

const FormItem = Form.Item;


export default class HUD extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>HUD</h1>
        <Form layout="horizontal">
          <FormItem>
            <Switch /> Display mission-related messages
          </FormItem>
          <FormItem>
            <Switch /> Display kill-related messages
          </FormItem>
          <FormItem>
            <Switch /> Display HUD messages at bottom of screen
          </FormItem>
        </Form>
      </div>
    );
  }

}
