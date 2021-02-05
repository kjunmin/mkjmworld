import React, { createRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './LayoutComponents/AppRouter/AppRouter';
import FooterComponent from './LayoutComponents/Footer/Footer';
import ScrollToTop from './LayoutComponents/AppRouter/ScrollToTop';
import Navbar from './LayoutComponents/NavBar/NavBar';


function App() {

  const ref: any = createRef();

  let currentTheme : any = localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light-theme';
  const [currTheme, setCurrTheme] = useState(currentTheme);

  function switchTheme() {
    const nextTheme = (currTheme === 'light-theme') ? 'dark-theme' : 'light-theme';
    ref.current.classList.remove(currTheme);
    ref.current.classList.add(nextTheme);
    setCurrTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  }

  return (
    <Router basename="/mkjmworld">
      <ScrollToTop>
        <div className="root-container" >
          <div className={currTheme} ref={ref}>
            <Navbar switchTheme={switchTheme} currTheme={currTheme} />
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
