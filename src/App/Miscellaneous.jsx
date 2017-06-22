import React, { Component } from 'react';

import { Switch, Form, InputNumber, Tooltip } from 'antd';

const FormItem = Form.Item;


export default class Miscellaneous extends Component {

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
              defaultValue={0}
              min={0}
              size={14}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.SkinDownload">Display custom skins</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.allowCustomSounds">Allow custom sounds</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="NET.filterUserNames">Filter user names</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.SmallMapWPLabels">Display small way point labels</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.SkipParatrooperViews">Skip paratrooper views</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.TypeClouds">Use new clouds rendering</Tooltip>}
            {...formItemLayout}
          >
            <Switch />
          </FormItem>
        </Form>
      </div>
    );
  }

}
