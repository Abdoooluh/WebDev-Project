// App.js
import React, { useState } from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CustomFooter from './components/Footer';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [tab, setTab] = useState("Home");
  const [loggedIn, setLoggedIn] = useState(false);




  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Home /> // pass a prop function that assigns setTab("Profile") to onclick
      </Content>
      <Footer>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default App;
