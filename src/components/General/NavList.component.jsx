import React from 'react'
import { Link } from 'react-router-dom'

const NavList = ({ className }) => {
  const navList = 'flex justify-center items-center py-3 space-x-4'

  return (
    <ul className={`${className ? className : ''} ${navList} nav-list`}>
      <li>
        <Link data-page="home" to="/">
          Home
          <div className="nav-underline"></div>
        </Link>
      </li>
      <li>
        <Link data-page="gallery" to="/gallery">
          Gallery
          <div className="nav-underline"></div>
        </Link>
      </li>
    </ul>
  )
}

export default NavList
