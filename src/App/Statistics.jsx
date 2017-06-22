import React, { Component } from 'react';

import { Collapse, Switch, Form, InputNumber, Tooltip } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;


class Users extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 10 },
      },
      wrapperCol: {
        sm: { span: 14 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="NET.showPilotArmy">Show belligerent</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotName">Show callsign</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotNumber">Show tail number</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotACDesignation">Show aircraft designation</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotACType">Show aircraft type</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotPing">Show ping</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotScore">Show score</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
      </Form>
    );
  }

}


class Belligerents extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 10 },
      },
      wrapperCol: {
        sm: { span: 14 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="NET.showTeamScore">Show score</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.cumulativeTeamScore">Accumulate score</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
      </Form>
    );
  }

}


export default class Statistics extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 10 },
      },
      wrapperCol: {
        sm: { span: 14 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>Statistics display</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="¬ NET.disableNetStatStatistics">Enabled</Tooltip>}
            {...formItemLayout}
          >
            <Switch checked />
          </FormItem>
        </Form>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Users" key="1">
            <Users />
          </Panel>
          <Panel header="Belligerents" key="2">
            <Belligerents />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
