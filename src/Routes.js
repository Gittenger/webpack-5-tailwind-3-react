import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CIndex from './components/components.index.js';

import {
  HomePage,
  PortfolioPage,
  LoginPage,
  ContactPage,
} from './pages/pages-index.js';

const AppRoutes = () => {
  const {
    AdminRoute,
    AdminDashboard,
    UploadImage,
    DeleteImage,
    ForgotPassword,
    ResetPassword,
    ChangePassword,
  } = CIndex;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/portfolio" exact element={<PortfolioPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        {/* <Route path="/admin" exact>
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        </Route> */}
        {/* <AdminRoute path="/upload-images" exact component={UploadImage} />
        <AdminRoute path="/delete-images" exact component={DeleteImage} />
        <AdminRoute path="/forgot-password" exact component={ForgotPassword} />
        <AdminRoute path="/change-password" exact component={ChangePassword} />
        <AdminRoute
          path="/reset-password/:token"
          exact
          component={ResetPassword}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
