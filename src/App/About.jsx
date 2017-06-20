import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';

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
            label="Name"
            {...formItemLayout}
          >
            <Input placeholder="Example server" />
          </FormItem>
          <FormItem
            label="Description"
            {...formItemLayout}
          >
            <Input placeholder="Example server description" />
          </FormItem>
        </Form>
      </div>
    );
  }

}
