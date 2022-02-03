import React, { useContext, useEffect, useState, useCallback } from 'react'
import CIndex from '../components.index.js'

const Layout = ({ children }) => {
  const { NavMobile, Footer } = CIndex

  return (
    <>
      <NavMobile />
      {children}
      <Footer />
    </>
  )
}

export default Layout
