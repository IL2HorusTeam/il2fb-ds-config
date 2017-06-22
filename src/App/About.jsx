import React, { Component } from 'react';
import { Form, Input, Tooltip } from 'antd';

const FormItem = Form.Item;


export default class About extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 20 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>About server</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="NET.serverName">Name</Tooltip>}
            {...formItemLayout}
          >
            <Input placeholder="Example server" />
          </FormItem>

          <FormItem
            label={<Tooltip title="NET.serverDescription">Description</Tooltip>}
            {...formItemLayout}
          >
            <Input placeholder="Example server description" />
          </FormItem>
        </Form>
      </div>
    );
  }

}
