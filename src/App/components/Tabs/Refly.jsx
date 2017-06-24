import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Switch, Form, InputNumber, Tooltip } from 'antd';

const FormItem = Form.Item;

import {
  setReflyEnabled, setReflyDeathPenalty, setReflyDeathPenaltyMultiplier,
  setReflyDeathLimit, toggleReflyDeathLimit,
} from '../../actions';


class Refly extends Component {

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
      <div className="tab-pane">
        <h1>Refly control</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="¬ NET.reflyDisabled">Allow refly</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.enabled}
              onChange={this.props.onEnabledChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.reflyKIADelay">Death penalty, sec</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              value={this.props.death_penalty}
              min={0}
              disabled={!this.props.enabled}
              onChange={this.props.onDeathPenaltyChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.reflyKIADelayMultiplier">Death penalty multiplier</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              value={this.props.death_penalty_multiplier}
              min={0.0}
              precision={1}
              step={0.1}
              disabled={!this.props.enabled}
              onChange={this.props.onDeathPenaltyMultiplierChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.maxAllowedKIA">Death limit, #</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              min={1}
              value={this.props.death_limit}
              disabled={
                (this.props.death_limit === null) ||
                !this.props.enabled
              }
              onChange={this.props.onDeathLimitChange}
            />
            <span>
              <Switch
                checked={this.props.death_limit === null}
                onChange={this.props.onDeathLimitToggle}
                disabled={!this.props.enabled}
                size="small"
              /> No limit
            </span>
          </FormItem>
        </Form>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return state.config.data.refly;
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEnabledChange: (value) => {
      dispatch(setReflyEnabled(value))
    },
    onDeathPenaltyChange: (value) => {
      dispatch(setReflyDeathPenalty(value))
    },
    onDeathPenaltyMultiplierChange: (value) => {
      dispatch(setReflyDeathPenaltyMultiplier(value))
    },
    onDeathLimitToggle: (value) => {
      dispatch(toggleReflyDeathLimit(value))
    },
    onDeathLimitChange: (value) => {
      dispatch(setReflyDeathLimit(value))
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Refly)
