import React, { Component } from 'react';

import { Collapse, Slider, Switch, Form, InputNumber, Tooltip } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;


const versionChecksMarks = {
  0: {
    style: {
      color: '#E74C3C',
    },
    label: 'Absent',
  },
  1: {
    style: {
      color: '#F1C40F',
    },
    label: 'Weak',
  },
  2: {
    style: {
      color: '#2ECC71',
    },
    label: 'Strict',
  },
};


class VersionChecks extends Component {

  render() {
    return (
      <Slider
        min={0}
        max={2}
        step={null}
        marks={versionChecksMarks}
        tipFormatter={value => `NET.checkRuntime=${value}`}
      />
    );
  }

}


class Speedhack extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 11 },
      },
      wrapperCol: {
        sm: { span: 4 },
      },
    };

    return (
      <Form layout="horizontal">
        <FormItem
          label={<Tooltip title="NET.checkServerTimeSpeed">Check server time speed</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.checkClientTimeSpeed">Check client time speed</Tooltip>}
          {...formItemLayout}
        >
          <Switch />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.checkTimeSpeedDifferense">Max time difference, %</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            defaultValue={0.2}
            precision={2}
            step={0.01}
            min={0.01}
            max={1}
            formatter={value => Math.round(value * 100)}
            parser={value => Math.round(value / 100)}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.checkTimeSpeedInterval">Max time difference period, sec</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            min={1}
            max={1000}
            defaultValue={17}
          />
        </FormItem>
      </Form>
    );
  }

}


class Lags extends Component {

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
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Max time" key="1">
            <Form layout="horizontal">
              <FormItem
                label={<Tooltip title="MaxLag.nearMaxLagTime">Near, sec</Tooltip>}
                {...formItemLayout}
              >
                <InputNumber
                  defaultValue={2.0}
                  precision={1}
                  step={0.1}
                  min={0.1}
                  max={30}
                />
              </FormItem>
              <FormItem
                label={<Tooltip title="MaxLag.farMaxLagTime">Far, sec</Tooltip>}
                {...formItemLayout}
              >
                <InputNumber
                  defaultValue={10.0}
                  precision={1}
                  step={0.1}
                  min={0.1}
                  max={30}
                />
              </FormItem>
            </Form>
          </Panel>
          <Panel header="Warnings" key="2">
            <Form layout="horizontal">
              <FormItem
                label={<Tooltip title="MaxLag.cheaterWarningDelay">Delay, sec</Tooltip>}
                {...formItemLayout}
              >
                <InputNumber
                  defaultValue={1.0}
                  precision={1}
                  step={0.1}
                  min={1.0}
                  max={30}
                />
              </FormItem>
              <FormItem
                label={<Tooltip title="MaxLag.cheaterWarningNum">Max number, #</Tooltip>}
                {...formItemLayout}
              >
                <InputNumber
                  defaultValue={3}
                  min={-1}
                />
              </FormItem>
            </Form>
          </Panel>
        </Collapse>
    );
  }

}


export default class Anticheat extends Component {

  render() {
    return (
      <div className="tab-pane">
        <h1>Anticheat control</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', ]}
        >
          <Panel header="Version check" key="1">
            <VersionChecks />
          </Panel>
          <Panel header="Speedhack" key="2">
            <Speedhack />
          </Panel>
          <Panel header="Lags" key="3">
            <Lags />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
