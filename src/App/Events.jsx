import React, { Component } from 'react';

import { Collapse, Slider, Switch, Form, Input, InputNumber } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;


const chatLevelMarks = {
  0: 'Minimal',
  1: 'Verbose',
  2: 'Chatty',
  3: 'Full',
};


export default class Events extends Component {

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
        <h1>Events</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Verbosity in game chat" key="1">
            <Slider
              min={0}
              max={3}
              defaultValue={3}
              step={null}
              marks={chatLevelMarks}
              tipFormatter={value => `chat.autoLogDetail=${value}`}
            />
          </Panel>
          <Panel header="Log file" key="2">
            <Form layout="horizontal">
              <FormItem>
                <Switch checked /> Keep existing log
              </FormItem>
              <FormItem>
                <Switch /> Log buildings
              </FormItem>
              <FormItem
                label="File name"
                {...formItemLayout}
              >
                <Input placeholder="eventlog.lst" />
              </FormItem>
            </Form>
          </Panel>
        </Collapse>
      </div>
    );
  }

}
