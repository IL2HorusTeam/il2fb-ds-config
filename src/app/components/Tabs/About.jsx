import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Input, Tooltip } from 'antd';

const FormItem = Form.Item;

import { setServerName, setServerDescription } from '../../actions';


class About extends Component {

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 20 },
      },
    };

    const { tr } = this.props;

    return (
      <div className="tab-pane">
        <h1>{ tr.about_server }</h1>
        <Form layout="horizontal">
          <FormItem
            label={<Tooltip title="NET.serverName">{ tr.name }</Tooltip>}
            {...formItemLayout}
          >
            <Input
              placeholder={ tr.example_server }
              value={this.props.name}
              onChange={this.props.onNameChange}
            />
          </FormItem>

          <FormItem
            label={<Tooltip title="NET.serverDescription">{ tr.description }</Tooltip>}
            {...formItemLayout}
          >
            <Input
              placeholder={ tr.example_server_description }
              value={this.props.description}
              onChange={this.props.onDescriptionChange}
            />
          </FormItem>
        </Form>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    name: state.config.data.about.name,
    description: state.config.data.about.description,
    tr: state.locales.translation
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNameChange: (e) => {
      dispatch(setServerName(e.target.value))
    },
    onDescriptionChange: (e) => {
      dispatch(setServerDescription(e.target.value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(About)
