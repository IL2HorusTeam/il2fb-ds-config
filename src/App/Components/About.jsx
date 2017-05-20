import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd';

const FormItem = Form.Item;


export default class About extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (
      <div>
        <h1>About server</h1>
        <Form layout="horizontal" style={{ maxWidth: '540px' }}>
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
