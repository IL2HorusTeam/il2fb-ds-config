import React, { Component } from 'react';

import { Collapse, Slider, Switch, Form, InputNumber, Row, Col } from 'antd';

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
        tipFormatter={value => `CRT=${value}`}
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
        <FormItem>
          <Switch /> Check server time speed
        </FormItem>
        <FormItem>
          <Switch /> Check client time speed
        </FormItem>
        <FormItem
          label="Max time difference period, sec"
          {...formItemLayout}
        >
          <InputNumber
            min={1}
            max={1000}
            defaultValue={17}
          />
        </FormItem>
        <FormItem
          label="Max time difference, %"
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
                label="Near, sec"
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
                label="Far, sec"
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
                label="Delay, sec"
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
                label="Max number, #"
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
          <Panel header="Version checks" key="1">
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
