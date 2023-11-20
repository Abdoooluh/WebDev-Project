// App.js
import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CustomFooter from './components/Footer';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default App;
