import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Collapse, Slider, Switch, Form, InputNumber, Tooltip } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;

import {
  setVersionCheckLevel,
  setSpeedhackCheckServerTimeSpeed, setSpeedhackCheckClientTimeSpeed,
  setSpeedhackMaxTimeDifference, setSpeedhackMaxTimeDifferencePeriod,
  setLagsMaxTimeNear, setLagsMaxTimeFar, setLagsWarningsDelay,
  setLagsWarningsLimit, toggleLagsWarningsLimit,
} from '../../actions';


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
        value={this.props.value}
        onChange={this.props.onValueChange}
      />
    );
  }

}


const mapStateToPropsVersionChecks = (state, ownProps) => {
  return {
    value: state.config.data.anticheat.version_check_level,
  }
}


const mapDispatchToPropsVersionChecks = (dispatch, ownProps) => {
  return {
    onValueChange: (value) => {
      dispatch(setVersionCheckLevel(value))
    },
  }
}


const VersionChecksContainer = connect(
  mapStateToPropsVersionChecks,
  mapDispatchToPropsVersionChecks,
)(VersionChecks)


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
          <Switch
            checked={this.props.check_server_time_speed}
            onChange={this.props.onCheckServerTimeSpeedChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.checkClientTimeSpeed">Check client time speed</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            checked={this.props.check_client_time_speed}
            onChange={this.props.onCheckClientTimeSpeedChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.checkTimeSpeedDifferense">Max time difference, %</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            precision={2}
            step={0.01}
            min={0.01}
            max={1}
            formatter={value => Math.round(value * 100)}
            parser={value => Math.round(value / 100)}
            value={this.props.max_time_difference}
            onChange={this.props.onMaxTimeDifferenceChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.checkTimeSpeedInterval">Max time difference period, sec</Tooltip>}
          {...formItemLayout}
        >
          <InputNumber
            min={1}
            max={1000}
            precision={1}
            step={0.1}
            value={this.props.max_time_difference_period}
            onChange={this.props.onMaxTimeDifferencePeriodChange}
          />
        </FormItem>
      </Form>
    );
  }

}


const mapStateToPropsSpeedhack = (state, ownProps) => {
  return state.config.data.anticheat.speedhack;
}


const mapDispatchToPropsSpeedhack = (dispatch, ownProps) => {
  return {
    onCheckServerTimeSpeedChange: (value) => {
      dispatch(setSpeedhackCheckServerTimeSpeed(value))
    },
    onCheckClientTimeSpeedChange: (value) => {
      dispatch(setSpeedhackCheckClientTimeSpeed(value))
    },
    onMaxTimeDifferenceChange: (value) => {
      dispatch(setSpeedhackMaxTimeDifference(value))
    },
    onMaxTimeDifferencePeriodChange: (value) => {
      dispatch(setSpeedhackMaxTimeDifferencePeriod(value))
    },
  }
}


const SpeedhackContainer = connect(
  mapStateToPropsSpeedhack,
  mapDispatchToPropsSpeedhack,
)(Speedhack)


class Lags extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 16 },
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
                  value={this.props.max_time.near}
                  precision={1}
                  step={0.1}
                  min={0.1}
                  max={30}
                  onChange={this.props.onMaxTimeNearChange}
                />
              </FormItem>
              <FormItem
                label={<Tooltip title="MaxLag.farMaxLagTime">Far, sec</Tooltip>}
                {...formItemLayout}
              >
                <InputNumber
                  value={this.props.max_time.far}
                  precision={1}
                  step={0.1}
                  min={0.1}
                  max={30}
                  onChange={this.props.onMaxTimeFarChange}
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
                  value={this.props.warnings.delay}
                  precision={1}
                  step={0.1}
                  min={1.0}
                  max={30}
                  onChange={this.props.onWarningsDelayChange}
                />
              </FormItem>
              <FormItem
                label={<Tooltip title="MaxLag.cheaterWarningNum">Limit before kick, #</Tooltip>}
                {...formItemLayout}
              >
                <InputNumber
                  value={this.props.warnings.limit}
                  min={1}
                  onChange={this.props.onWarningsLimitChange}
                  disabled={this.props.warnings.limit === null}
                />
                <span>
                  <Switch
                    defaultChecked={this.props.warnings.limit === null}
                    onChange={this.props.onWarningsLimitToggle}
                    size="small"
                  /> No limit
                </span>

              </FormItem>
            </Form>
          </Panel>
        </Collapse>
    );
  }

}


const mapStateToPropsLags = (state, ownProps) => {
  return state.config.data.anticheat.lags;
}


const mapDispatchToPropsLags = (dispatch, ownProps) => {
  return {
    onMaxTimeNearChange: (value) => {
      dispatch(setLagsMaxTimeNear(value))
    },
    onMaxTimeFarChange: (value) => {
      dispatch(setLagsMaxTimeFar(value))
    },
    onWarningsDelayChange: (value) => {
      dispatch(setLagsWarningsDelay(value))
    },
    onWarningsLimitChange: (value) => {
      dispatch(setLagsWarningsLimit(value))
    },
    onWarningsLimitToggle: (value) => {
      dispatch(toggleLagsWarningsLimit(value))
    },
  }
}


const LagsContainer = connect(
  mapStateToPropsLags,
  mapDispatchToPropsLags,
)(Lags)


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
            <VersionChecksContainer />
          </Panel>
          <Panel header="Speedhack" key="2">
            <SpeedhackContainer />
          </Panel>
          <Panel header="Lags" key="3">
            <LagsContainer />
          </Panel>
        </Collapse>
      </div>
    );
  }

}
