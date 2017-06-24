import React, { Component } from 'react';
import { connect } from 'react-redux'

require("typeface-oxygen")

import Tabs from './components/Tabs';
import Footer from './components/Footer';

import './index.css';


class App extends Component {

  render() {
    return (
      <div>
        <article className="content">
          <div className="header">
            <h1>«IL&#8209;2&nbsp;FB»&nbsp;DS&nbsp;CE</h1>
            <h3>configuration editor for dedicated server of «IL&#8209;2&nbsp;Sturmovik:&nbsp;Forgotten&nbsp;Battles» aviasimulator</h3>
          </div>
          <Tabs
            activeTab={this.props.activeTab}
            isFetching={this.props.config.isFetching}
            data={this.props.config.data}
          />
        </article>
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  activeTab: state.activeTab,
  config: state.config,
})

export default connect(mapStateToProps)(App)
