import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth.js';

const { logout } = auth;

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Tools</h2>
      <div>
        <div>
          <li>
            <Link to="/upload-images">Add Images</Link>
          </li>
          <li>
            <Link to="/delete-images">Delete Images</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a onClick={logout} to="/">
              Logout
            </a>
          </li>
        </div>
        <h2>Password Stuff</h2>
        <div>
          <li>
            <Link to="/forgot-password">Forgot password</Link>
          </li>
          <li>
            <Link to="/change-password">Change password</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
