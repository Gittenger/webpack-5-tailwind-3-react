import React from 'react';

import NavList from './NavList.component';

const NavMobile = ({ showNavList }) => {
  return (
    <div className={showNavList ? 'show' : 'hide'}>
      <NavList />
    </div>
  );
};

export default NavMobile;
