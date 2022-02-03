import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage, GalleryPage } from './pages/pages-index.js'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/gallery" exact element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes
