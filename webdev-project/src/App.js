// App.js
import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './components/Home';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Home />
      </Content>
    </Layout>
  );
};

export default App;
