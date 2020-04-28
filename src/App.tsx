import React from 'react';
import './css/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './LayoutComponents/Navbar';
import AppRouter from './AppRouter';
import FooterComponent from './LayoutComponents/Footer';

function App() {
  return (
    <Router>
      <div className="root-container">
        <Navbar />
        <div className="page-container">
          <AppRouter />
          <FooterComponent />
        </div>
      </div>


    </Router>
  );
}

export default App;
