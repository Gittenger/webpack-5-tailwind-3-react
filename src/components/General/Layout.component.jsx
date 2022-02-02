import React, { useContext, useEffect, useState, useCallback } from 'react';
import PageContext from '../../contexts/PageContext';
import CIndex from '../components.index.js';

import { setActiveColor } from './NavFunctions.js';

const Layout = ({ children }) => {
  const { NavDesk, NavMobile, ToggleNavButton, Footer, AdminMenu } = CIndex;

  // STATES and CONTEXT
  const [navMobileActive, setNavMobileActive] = useState(false);
  const [showNavList, setShowNavList] = useState(false);
  const { activePage } = useContext(PageContext);

  // TOGGLE NAV ACTION
  const toggleNav = () => {
    setShowNavList(!showNavList);
  };

  // BREAKPOINT
  const mobileBreakpoint = '768px';

  // WINDOW WIDTH EVENT LISTENER
  const checkNavMobileActive = useCallback(() => {
    if (window.innerWidth <= mobileBreakpoint) {
      setNavMobileActive(true);
    } else setNavMobileActive(false);
  }, [mobileBreakpoint]);

  // ON COMPONENT RENDER
  useEffect(() => {
    setActiveColor(activePage);
    checkNavMobileActive();
    if (window.screen.width <= mobileBreakpoint) {
      setNavMobileActive(true);
    }
    window.addEventListener('resize', checkNavMobileActive);
    return () => {
      window.removeEventListener('resize', checkNavMobileActive);
    };
  }, [activePage, navMobileActive, checkNavMobileActive, mobileBreakpoint]);

  return (
    <>
      {navMobileActive ? (
        <div>
          <ToggleNavButton
            onClickFunc={toggleNav}
            className="toggle-nav-button"
            showNavList={showNavList}
          />
          <NavMobile showNavList={showNavList} />
          <div>
            {children}
            {/* <Footer /> */}
          </div>
          {/* <AdminMenu /> */}
        </div>
      ) : (
        <div>
          <NavDesk activePage={activePage} />
          <div>
            {children}
            {/* <Footer /> */}
          </div>
          {/* <AdminMenu /> */}
        </div>
      )}
    </>
  );
};

export default Layout;
