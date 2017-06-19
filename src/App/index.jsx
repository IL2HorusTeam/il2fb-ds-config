import React, { Component } from 'react';

import { Layout, Menu, Card, } from 'antd';
import { Icon } from 'react-fa';

const { Map } = require('immutable');
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

require("typeface-oxygen")

import About from './About';
import Anticheat from './Anticheat';
import Connection from './Connection';
import Console from './Console';
import DeviceLink from './DeviceLink';
import Events from './Events';
import Export from './Export';
import HUD from './HUD';
import Import from './Import';
import Miscellaneous from './Miscellaneous';
import Morse from './Morse';
import Refly from './Refly';
import Statistics from './Statistics';

import Footer from './Footer';

import './index.css';


const tabsToComponentsMap = {
  about: About,
  anticheat: Anticheat,
  connection: Connection,
  console: Console,
  deviceLink: DeviceLink,
  events: Events,
  export: Export,
  hud: HUD,
  import: Import,
  misc: Miscellaneous,
  morse: Morse,
  refly: Refly,
  statistics: Statistics,
}


class App extends Component {

  static defaultProps = {
      'initialTab': 'about',
  };

  state = {
    data: Map({
      'config': null,
      'activeTab': this.props.initialTab,
    })
  }

  toggleMenuItem = (e) => {
    this.setState(({data}) => ({
      data: data.update('activeTab', activeTab => e.key)
    }));
  }

  render() {
    let Pane = tabsToComponentsMap[this.state.data.get('activeTab')];

    return (
      <div>
        <article className="content">
          <div className="header">
            <h1>«IL&#8209;2&nbsp;FB»&nbsp;DS&nbsp;CE</h1>
            <h3>configuration editor for dedicated server of «IL&#8209;2&nbsp;Sturmovik:&nbsp;Forgotten&nbsp;Battles» aviasimulator</h3>
          </div>

          <Card className="content-inside">
            <Layout className="content-inside-layout" style={{ background: '#fff' }}>
              <Sider className="nav-menu" style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={[this.props.initialTab]}
                  defaultOpenKeys={['edit', 'fileIO']}
                  style={{ height: '100%' }}
                  onClick={this.toggleMenuItem}
                >
                  <SubMenu key="edit" title={<span><Icon name="pencil-square-o" size="lg" className="nav-icon" />Edit</span>}>
                    <Menu.Item key="about">
                      <span>
                        <Icon name="info-circle" size="lg" className="nav-icon" />
                        <span className="nav-text">About</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="anticheat">
                      <span>
                        <Icon name="user-secret" size="lg" className="nav-icon" />
                        <span className="nav-text">Anticheat</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="connection">
                      <span>
                        <Icon name="plug" size="lg" className="nav-icon" />
                        <span className="nav-text">Connection</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="console">
                      <span>
                        <Icon name="terminal" size="lg" className="nav-icon" />
                        <span className="nav-text">Console</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="deviceLink">
                      <span>
                        <Icon name="link" size="lg" className="nav-icon" />
                        <span className="nav-text">Device Link</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="events">
                      <span>
                        <Icon name="bolt" size="lg" className="nav-icon" />
                        <span className="nav-text">Events</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="hud">
                      <span>
                        <Icon name="dashboard" size="lg" className="nav-icon" />
                        <span className="nav-text">HUD</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="morse">
                      <span>
                        <Icon name="tty" size="lg" className="nav-icon" />
                        <span className="nav-text">Morse</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="refly">
                      <span>
                        <Icon name="repeat" size="lg" className="nav-icon" />
                        <span className="nav-text">Refly</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="statistics">
                      <span>
                        <Icon name="pie-chart" size="lg" className="nav-icon" />
                        <span className="nav-text">Statistics</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="misc">
                      <span>
                        <Icon name="cube" size="lg" className="nav-icon" />
                        <span className="nav-text">Miscellaneous</span>
                      </span>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="fileIO" title={<span><Icon name="file-text-o" size="lg" className="nav-icon" />File</span>}>
                    <Menu.Item key="import">
                      <span>
                        <Icon name="upload" size="lg" className="nav-icon" />
                        <span className="nav-text">Import</span>
                      </span>
                    </Menu.Item>
                    <Menu.Item key="export">
                      <span>
                        <Icon name="download" size="lg" className="nav-icon" />
                        <span className="nav-text">Export</span>
                      </span>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>

              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Pane />
              </Content>
            </Layout>
          </Card>
        </article>

        <Footer />
      </div>
    );
  }

}

export default App;
