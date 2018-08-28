import React, { Component } from 'react';
import styled from 'styled-components';
import '../../global-styles.js';
// import Header from '../components/Header';
// import Sidebar from '../components/Header';
import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

// const AppWrapper = ``

class App extends Component {
  render() {
    return (
    	<Layout>
			<Sider>Sider</Sider>
			<Layout>
        		<Header>Header</Header>
        		<Content>Content</Content>
        		<Footer>Footer</Footer>
      		</Layout>
		</Layout>

    );
  }
}

export default App;
