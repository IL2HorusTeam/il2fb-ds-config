import React, { Component } from 'react';
import { Layout, Menu, } from 'antd';
import { Icon } from 'react-fa'

const { Map } = require('immutable');
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import About from './Components/About';
import Anticheat from './Components/Anticheat';
import Connection from './Components/Connection';
import Console from './Components/Console';
import DeviceLink from './Components/DeviceLink';
import Events from './Components/Events';
import FileIO from './Components/FileIO';
import HUD from './Components/HUD';
import Miscellaneous from './Components/Miscellaneous';
import Morse from './Components/Morse';
import Refly from './Components/Refly';
import Statistics from './Components/Statistics';


import './index.css';


const tabsToComponentsMap = {
  about: About,
  anticheat: Anticheat,
  connection: Connection,
  console: Console,
  deviceLink: DeviceLink,
  events: Events,
  fileIO: FileIO,
  hud: HUD,
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
      <Layout>
        <Header className="header">
          <div className="logo">LOGO</div>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[this.props.initialTab]}
                defaultOpenKeys={['edit']}
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
                <Menu.Item key="fileIO">
                  <span>
                    <Icon name="file-text-o" size="lg" className="nav-icon" />
                    <span className="nav-text">Import / Export</span>
                  </span>
                </Menu.Item>
              </Menu>
            </Sider>

            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Pane />
              Hi there! API base URL: { process.env.API_BASE_URL }
            </Content>
          </Layout>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }

}

export default App;
