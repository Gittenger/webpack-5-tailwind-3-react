import React from 'react'
import { Link } from 'react-router-dom'

const NavList = ({ className }) => {
	return (
		<div className={`${className} nav-list`}>
			<li>
				<Link data-page="home" to="/">
					Home
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="contact" to="/contact">
					Contact
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="portfolio" to="/portfolio">
					Portfolio
					<div className="nav-underline"></div>
				</Link>
			</li>
		</div>
	)
}

export default NavList
