import React, { Component } from 'react';
import styled from 'styled-components';
// import '../../global-styles.js';
// import Header from '../components/Header';
// import Sidebar from '../components/Header';
import { Layout, Button } from 'antd';
import Login from 'Pages/Login';
const { Header, Footer, Sider, Content } = Layout;


// const AppWrapper = ``

		// <Layout>
		// 	<Sider>Sider</Sider>
		// 	<Layout>
		// <Header>Header</Header>
		// <Content>Content</Content>
		// <Footer>Footer</Footer>
		// </Layout>
		// </Layout>

class App extends Component {
  render() {
    return (
		<Login/>
    );
  }
}

export default App;
