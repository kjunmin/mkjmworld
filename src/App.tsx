import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './LayoutComponents/Header';

function App() {
  return (
    <Router>
      <Layout>
        <HeaderComponent />
        {/* <AppRouter />
        <FooterComponent /> */}
      </Layout>
    </Router>
  );
}

export default App;
