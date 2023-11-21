// App.js
import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CustomFooter from './components/Footer';
import LoginSignupPage from './components/LoginSignupPage';
import AboutUs from './components/AboutUs';

const { Header, Content } = Layout;

const App = () => {
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
            <Route path="/login" element={<LoginSignupPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Content>
        <CustomFooter />
      </Layout>
    </Router>
  );
};

export default App;
