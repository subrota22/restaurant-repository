import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../../src/assets/homeImages/nav_logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="nav logo" className='navLogo mx-auto d-md-none d-lg-block' />
          </NavLink>
          <button className="navbar-toggler d-md-none d-lg-block" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/menu" className="nav-link">Menu</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pages" className="nav-link">Pages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
              </li>

              <li className="nav-item">
                <button className="reservateButton">Reservate</button>
              </li>

              <li className="nav-item">
                <button className="onlineOrder">Online order</button>
              </li>

              <li className="nav-item dropdown ms-3">
                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More useful link
                </NavLink>


                <ul className="dropdown-menu">
                  <li><NavLink to="/privacy-policy" className="dropdown-item"> Privacy policy </NavLink></li>
                  <li><NavLink to="/contact" className="dropdown-item"> Contact us </NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink to="/services" className="dropdown-item">Services</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;