import React, { Component } from 'react';

import { Collapse, Switch, Form, InputNumber, Tag, Input, Tooltip, Button } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;


class Connection extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 6 },
      },
      wrapperCol: {
        sm: { span: 4 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="Console.IP">Port</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={0}
            min={0}
            max={65000}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.IPS">Allowed hosts</Tooltip>}
          {...formItemLayout}
        >
          <Button size="small" type="dashed">+ New Host</Button>
        </FormItem>
      </Form>
    );
  }

}


class Logging extends Component {

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
          label={<Tooltip title="Console.LOG">Enabled</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.LOGKEEP">Keep existing file</Tooltip>}
          {...formItemLayout}
        >
          <Switch checked />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.LOGTIME">Log time</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.LOGFILE">File name</Tooltip>}
          {...formItemLayout}
        >
          <Input placeholder="log.lst" />
        </FormItem>
      </Form>
    );
  }

}


class History extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 4 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="Console.HISTORY">Max records</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={128}
            min={0}
            max={10000}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="Console.HISTORYCMD">Max commands</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={128}
            min={0}
            max={10000}
          />
        </FormItem>
      </Form>
    );
  }

}


export default class Console extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Server console</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Connection" key="1">
            <Connection />
          </Panel>
          <Panel header="Logging" key="2">
            <Logging />
          </Panel>
          <Panel header="History" key="3">
            <History />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
