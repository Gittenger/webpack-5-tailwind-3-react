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
        {/* <Route
          path="/admin"
          exact
          element={<AdminRoute component={AdminDashboard} />}
        />
        <Route
          path="/upload-images"
          exact
          element={<AdminRoute component={UploadImage} />}
        />
        <Route
          path="/delete-images"
          exact
          element={<AdminRoute component={DeleteImage} />}
        />
        <Route
          path="/forgot-password"
          exact
          element={<AdminRoute component={ForgotPassword} />}
        />
        <Route
          path="/change-password"
          exact
          element={<AdminRoute component={ChangePassword} />}
        />
        <Route
          path="/reset-password/:token"
          exact
          element={<AdminRoute component={ResetPassword} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
