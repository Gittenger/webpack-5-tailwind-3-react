import React from 'react';

import CIndex from '../components.index.js';

import { setActiveColor } from './NavFunctions.js';

const NavDesk = ({ activePage }) => {
  const { NavList } = CIndex;
  setActiveColor(activePage);

  return (
    <div>
      <NavList className="nav-list-desk" />
    </div>
  );
};

export default NavDesk;
