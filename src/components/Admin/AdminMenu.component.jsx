import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../utils/auth.js';

const { checkAuthToken, logout } = auth;

const AdminMenu = () => {
  return (
    <div className={checkAuthToken() ? 'active' : ''}>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link onClick={logout} to="/">
          Logout
        </Link>
      </li>
    </div>
  );
};

export default AdminMenu;
