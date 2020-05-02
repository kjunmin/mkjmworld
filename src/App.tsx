import React from 'react';
import './css/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './LayoutComponents/Navbar';
import AppRouter from './LayoutComponents/AppRouter';
import FooterComponent from './LayoutComponents/Footer';
import ScrollToTop from './LayoutComponents/AppRouter/ScrollToTop';


function App() {

  return (
    <Router>
      <ScrollToTop>
        <div className="root-container">
          <Navbar />
          <div className="page-container">
            <AppRouter />
            <FooterComponent />
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
