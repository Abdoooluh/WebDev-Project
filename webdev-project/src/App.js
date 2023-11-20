// App.js
import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CustomFooter from './components/Footer';

const { Header, Content } = Layout;

const App = () => {
  const [tab, setTab] = useState("Home");
  const [loggedIn, setLoggedIn] = useState(false);




  return (
    <Router>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Content>
        <CustomFooter />
      </Layout>
    </Router>
  );
};

export default App;
