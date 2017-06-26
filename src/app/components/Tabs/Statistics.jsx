import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Collapse, Switch, Form, Tooltip } from 'antd';

const FormItem = Form.Item;
const Panel = Collapse.Panel;

import {
  setStatisticsEnabled,
  setStatisticsBelligerentsShowScore, setStatisticsBelligerentsAccumulateScore,
  setStatisticsUsersShowBelligerent, setStatisticsUsersShowCallsign,
  setStatisticsUsersShowTailNumber, setStatisticsUsersShowPing,
  setStatisticsUsersShowAircraftDesignation, setStatisticsUsersShowAircraftType,
  setStatisticsUsersShowScore,
} from '../../actions';


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
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_belligerent}
            onChange={this.props.onShowBelligerentChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotName">Show callsign</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_callsign}
            onChange={this.props.onShowCallsignChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotNumber">Show tail number</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_tail_number}
            onChange={this.props.onShowTailNumberChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotACDesignation">Show aircraft designation</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_aircraft_designation}
            onChange={this.props.onShowAircraftDesignationChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotACType">Show aircraft type</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_aircraft_type}
            onChange={this.props.onShowAircraftTypeChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotPing">Show ping</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_ping}
            onChange={this.props.onShowPingChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.showPilotScore">Show score</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_score}
            onChange={this.props.onShowScoreChange}
          />
        </FormItem>
      </Form>
    );
  }

}


const mapStateToPropsUsers = (state, ownProps) => {
  return {
    enabled: state.config.data.statistics.enabled,
    ...state.config.data.statistics.users,
  };
}


const mapDispatchToPropsUsers = (dispatch, ownProps) => {
  return {
    onShowBelligerentChange: (value) => {
      dispatch(setStatisticsUsersShowBelligerent(value));
    },
    onShowCallsignChange: (value) => {
      dispatch(setStatisticsUsersShowCallsign(value));
    },
    onShowTailNumberChange: (value) => {
      dispatch(setStatisticsUsersShowTailNumber(value));
    },
    onShowAircraftDesignationChange: (value) => {
      dispatch(setStatisticsUsersShowAircraftDesignation(value));
    },
    onShowAircraftTypeChange: (value) => {
      dispatch(setStatisticsUsersShowAircraftType(value));
    },
    onShowPingChange: (value) => {
      dispatch(setStatisticsUsersShowPing(value));
    },
    onShowScoreChange: (value) => {
      dispatch(setStatisticsUsersShowScore(value));
    },
  }
}


const UsersContainer = connect(
  mapStateToPropsUsers,
  mapDispatchToPropsUsers,
)(Users)


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
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.show_score}
            onChange={this.props.onShowScoreChange}
          />
        </FormItem>
        <FormItem
          label={<Tooltip title="NET.cumulativeTeamScore">Accumulate score</Tooltip>}
          {...formItemLayout}
        >
          <Switch
            disabled={!this.props.enabled}
            checked={this.props.accumulate_score}
            onChange={this.props.onAccumulateScoreChange}
          />
        </FormItem>
      </Form>
    );
  }

}


const mapStateToPropsBelligerents = (state, ownProps) => {
  return {
    enabled: state.config.data.statistics.enabled,
    ...state.config.data.statistics.belligerents,
  };
}


const mapDispatchToPropsBelligerents = (dispatch, ownProps) => {
  return {
    onShowScoreChange: (value) => {
      dispatch(setStatisticsBelligerentsShowScore(value));
    },
    onAccumulateScoreChange: (value) => {
      dispatch(setStatisticsBelligerentsAccumulateScore(value));
    },
  }
}


const BelligerentsContainer = connect(
  mapStateToPropsBelligerents,
  mapDispatchToPropsBelligerents,
)(Belligerents)


class Statistics extends Component {

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
            <Switch
              checked={this.props.enabled}
              onChange={this.props.onEnabledChange}
            />
          </FormItem>
        </Form>
        <Collapse
          bordered={false}
          defaultActiveKey={['1', '2', ]}
        >
          <Panel header="Users" key="1">
            <UsersContainer />
          </Panel>
          <Panel header="Belligerents" key="2">
            <BelligerentsContainer />
          </Panel>
        </Collapse>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    enabled: state.config.data.statistics.enabled,
  };
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEnabledChange: (value) => {
      dispatch(setStatisticsEnabled(value))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Statistics)
