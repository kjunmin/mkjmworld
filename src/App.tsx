import React, { createRef } from 'react';
import './css/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './LayoutComponents/Navbar';
import AppRouter from './LayoutComponents/AppRouter';
import FooterComponent from './LayoutComponents/Footer';
import ScrollToTop from './LayoutComponents/AppRouter/ScrollToTop';


function App() {

  const ref: any = createRef();

  return (
    <Router>
      <ScrollToTop>
        <div className="root-container" >
          <div className="light-theme" ref={ref}>
            <Navbar themeRef={ref} />
            <div className="page-container">
              <AppRouter />
              <FooterComponent />
            </div>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
