import React, { Component } from 'react';
import { connect } from 'react-redux';

require("typeface-oxygen")

import { getLanguage, choiceLanguage } from './actions';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import LanguageSelect from './components/LanguageSelect'

import './index.css';


export class App extends Component {

  componentDidMount() {
    this.props.getLanguage();
  }

  render() {

    const { translation, language } = this.props.locales;

    return (
      <div>
        <article className="content">
          <LanguageSelect language={language} choiceLanguage={this.props.choiceLanguage}/>
          <div className="header">
            <h1>{ translation.caption1 }</h1>
            <h3>{ translation.caption2 }</h3>
          </div>
          <Tabs />
        </article>
        <Footer tr={translation}/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = dispatch => {
  return {
    getLanguage : () => dispatch(getLanguage()),
    choiceLanguage: language => dispatch(choiceLanguage(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);