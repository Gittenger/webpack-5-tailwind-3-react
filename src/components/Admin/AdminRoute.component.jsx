import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import auth from '../../utils/auth.js';

const { checkAuthToken } = auth;

const AdminRoute = ({ component: Component, ...rest }) => {
  return checkAuthToken() && checkAuthToken().user.role === 'admin' ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoute;
