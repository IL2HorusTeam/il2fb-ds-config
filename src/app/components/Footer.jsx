import React, { Component } from 'react';

import { Button, Popover, } from 'antd';
import { Icon } from 'react-fa';


const aboutContent = (
  <div>
    <p>
      <strong>«IL&#8209;2&nbsp;FB»&nbsp;DS&nbsp;CE</strong> is an online
      configuration editor for dedicated server of
      «IL&#8209;2&nbsp;Sturmovik:&nbsp;Forgotten&nbsp;Battles» aviasimulator.
    </p>
    <p>
      The editor is compatible with game <strong>version 4.13.4</strong>.
    </p>
    <p>
      It can be used to generate new or to modify existing configuration files.
    </p>
    <p>
      Use <strong>«Import» tab</strong> to upload and edit an existing
      configuration file.
    </p>
    <p>
      Use <strong>«Export» tab</strong> to download configuration file from
      editor.
    </p>
    <p>
      Field names contain tooltips with names of parameters in configuration
      file. Tooltips can start with <strong>¬</strong> symbol of boolean
      algebra, which means that option's values in editor and in file are
      mutually inverted.
    </p>
    <p>
      The editor is powered by <a href="https://pypi.python.org/pypi/il2fb-ds-config" target="_blank">«il2fb&#8209;ds&#8209;config»</a> library,
      which is written in Python programming language by <a href="https://github.com/IL2HorusTeam" target="_blank">IL&#8209;2&nbsp;Horus&nbsp;Team</a>.
    </p>
    <p>
      Please, find more information following links at the bottom of this
      page.
    </p>
  </div>
);


export default class Footer extends Component {

  onDocsClick() {
    window.open(
      'https://github.com/IL2HorusTeam/il2fb-ds-config#il-2-fb-ds-config',
      '_blank',
    );
  }

  onSourcesClick() {
    window.open(
      'https://github.com/IL2HorusTeam/il2fb-ds-config',
      '_blank',
    );
  }

  onIssuesClick() {
    window.open(
      'https://github.com/IL2HorusTeam/il2fb-ds-config/issues',
      '_blank',
    );
  }

  render() {

    const { tr } = this.props;

    return (
      <footer>
        <div className="footer-inside">
          <Popover
            title="About this page"
            content={aboutContent}
            trigger="click"
            overlayClassName="footer-about"
          >
            <Button><Icon name="info" size="lg" />{ tr.about }</Button>
          </Popover>

          <Button onClick={this.onDocsClick}><Icon name="book" size="lg" />{ tr.docs }</Button>
          <Button onClick={this.onSourcesClick}><Icon name="code" size="lg" />{ tr.source }</Button>
          <Button onClick={this.onIssuesClick}><Icon name="bug" size="lg" />{ tr.issues }</Button>
        </div>
      </footer>
    );
  }

}
