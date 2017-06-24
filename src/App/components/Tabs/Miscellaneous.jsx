import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Switch, Form, InputNumber, Tooltip, Button } from 'antd';

const FormItem = Form.Item;

import {
  setMiscDifficulty, setMiscDisplayCustomSkins, setMiscAllowCustomSounds,
  setMiscFilterUserNames, setMiscDisplaySmallWayPointLabels,
  setMiscSkipParatrooperViews, setMiscUseNewCloudsRendering,
} from '../../actions';


class Miscellaneous extends Component {

  onOpenDifficultyEditorClick() {
    window.open(
      'http://il2horusteam.github.io/il2fb-difficulty/',
      '_blank',
    );
  }

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
        <h1>Miscellaneous options</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="NET.difficulty">Difficulty</Tooltip>}
            {...formItemLayout}
          >
            <InputNumber
              value={this.props.difficulty}
              min={0}
              size={14}
              onChange={this.props.onDifficultyChange}
            />
            <Tooltip title="Click to open difficulty editor" placement="right">
              <Button
                shape="circle"
                icon="edit"
                size="small"
                onClick={this.onOpenDifficultyEditorClick}
              />
            </Tooltip>
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.SkinDownload">Display custom skins</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.display_custom_skins}
              onChange={this.props.onDisplayCustomSkinsChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.allowCustomSounds">Allow custom sounds</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.allow_custom_sounds}
              onChange={this.props.onAllowCustomSoundsChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.filterUserNames">Filter user names</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.filter_user_names}
              onChange={this.props.onFilterUserNamesChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.SmallMapWPLabels">Display small way point labels</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.display_small_way_point_labels}
              onChange={this.props.onDisplaySmallWayPointLabelsChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.SkipParatrooperViews">Skip paratrooper views</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.skip_paratrooper_views}
              onChange={this.props.onSkipParatrooperViewsChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.TypeClouds">Use new clouds rendering</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.use_new_clouds_rendering}
              onChange={this.props.onUseNewCloudsRenderingChange}
            />
          </FormItem>
        </Form>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return state.config.data.misc;
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDifficultyChange: (value) => {
      dispatch(setMiscDifficulty(value));
    },
    onDisplayCustomSkinsChange: (value) => {
      dispatch(setMiscDisplayCustomSkins(value));
    },
    onAllowCustomSoundsChange: (value) => {
      dispatch(setMiscAllowCustomSounds(value));
    },
    onFilterUserNamesChange: (value) => {
      dispatch(setMiscFilterUserNames(value));
    },
    onDisplaySmallWayPointLabelsChange: (value) => {
      dispatch(setMiscDisplaySmallWayPointLabels(value));
    },
    onSkipParatrooperViewsChange: (value) => {
      dispatch(setMiscSkipParatrooperViews(value));
    },
    onUseNewCloudsRenderingChange: (value) => {
      dispatch(setMiscUseNewCloudsRendering(value));
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Miscellaneous)
