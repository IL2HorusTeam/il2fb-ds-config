import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Switch, Form, Tooltip } from 'antd';

const FormItem = Form.Item;

import {
  setAllowMorseAsText, setShowMorseAsText, setBlockMorseChat,
} from '../../actions';



class Morse extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
      },
      wrapperCol: {
        sm: { span: 10 },
      },
    };

    return (
      <div className="tab-pane">
        <h1>Morse messages</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="NET.allowMorseAsText">Allow morse as text</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.allow_morse_as_text}
              onChange={this.props.onAllowMorseAsTextChange}
            />
          </FormItem>
          <FormItem
          label={<Tooltip title="game.ShowMorseAsText">Show morse as text</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.show_morse_as_text}
              onChange={this.props.onShowMorseAsTextChange}
            />
          </FormItem>
          <FormItem
            label={<Tooltip title="game.BlockMorseChat">Block morse chat</Tooltip>}
            {...formItemLayout}
          >
            <Switch
              checked={this.props.block_morse_chat}
              onChange={this.props.onBlockMorseChatChange}
            />
          </FormItem>
        </Form>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return state.config.data.morse;
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAllowMorseAsTextChange: (value) => {
      dispatch(setAllowMorseAsText(value))
    },
    onShowMorseAsTextChange: (value) => {
      dispatch(setShowMorseAsText(value))
    },
    onBlockMorseChatChange: (value) => {
      dispatch(setBlockMorseChat(value))
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Morse)
