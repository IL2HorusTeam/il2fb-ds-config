import React, { Component } from 'react';

import { Switch, Form } from 'antd';

const FormItem = Form.Item;


export default class Morse extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Morse messages</h1>
        <Form layout="horizontal">
          <FormItem>
            <Switch checked /> Allow morse as text
          </FormItem>
          <FormItem>
            <Switch /> Show morse as text
          </FormItem>
          <FormItem>
            <Switch /> Block morse chat
          </FormItem>
        </Form>
      </div>
    );
  }

}
