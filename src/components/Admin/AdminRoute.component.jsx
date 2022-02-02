import React, { Component } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import auth from '../../utils/auth.js';

const { checkAuthToken } = auth;

const AdminRoute = ({ children, component: Component, ...rest }) => {
  const navigate = useNavigate();

  return checkAuthToken() && checkAuthToken().user.role === 'admin'
    ? children
    : navigate('/login', { state: { from: props.location } });
};

export default AdminRoute;
