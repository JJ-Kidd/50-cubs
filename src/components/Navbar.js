import React, { useEffect, useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import threeLines from '../img/three-horizontal-lines.svg'
import logo from '../img/logo.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const isActive = menuOpen ? 'is-active' : '';
  return (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Three Men and 50 Cubs
        </Link>

        <a role="button" onClick={() => {setMenuOpen(!menuOpen)}} class={`navbar-burger ${isActive}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

      </div>
      <div className={`navbar-menu ${isActive}`}>
      <div className="navbar-start">
          <Link
            className="navbar-item"
            to={"/riders"}
            key={"riders"}
          >
            Riders
          </Link>
          <Link
            className="navbar-item"
            to={"/sponsor-us"}
            key={"sponsor-us"}
          >
            Sponsor Us
          </Link>
          <Link
            className="navbar-item"
            to={"/advisors"}
            key={"advisors"}
          >
            Advisors
          </Link>
          <Link
            className="navbar-item"
            to={"/sponsors"}
            key={"sponsors"}
          >
            Sponsors
          </Link>
          
      </div>
    </div>
    </div>
  </nav>
)
  }

export default Navbar
