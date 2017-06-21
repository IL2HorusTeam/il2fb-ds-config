import React, { Component } from 'react';

import { Collapse, Form, InputNumber, Tag, Input, Tooltip, Button } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;


class Connection extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 6 },
      },
      wrapperCol: {
        sm: { span: 18 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label="Host"
          {...formItemLayout}
        >
          <Input placeholder="localhost" />
        </FormItem>
        <FormItem
          label="Port"
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={0}
            min={0}
            max={65000}
          />
        </FormItem>
        <FormItem
          label="Allowed hosts"
          {...formItemLayout}
        >
          <Button size="small" type="dashed">+ New Host</Button>
        </FormItem>
      </Form>
    );
  }

}


export default class DeviceLink extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Device Link interface</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', ]}
        >
          <Panel header="Connection" key="1">
            <Connection />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
