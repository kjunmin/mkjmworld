import React, { createRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './LayoutComponents/AppRouter';
import FooterComponent from './LayoutComponents/Footer';
import ScrollToTop from './LayoutComponents/AppRouter/ScrollToTop';


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
            <div className="page-container">
              <AppRouter switchTheme={switchTheme} />
              <FooterComponent />
            </div>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
