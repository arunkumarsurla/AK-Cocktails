import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header-section navbar">
        <h1 style={{ fontSize: "30px", color: "white" }}>AK & COCKTAILS</h1>
        <div>
          <ul className="nav-items">
            <NavLink to="/">
              <li className="nav-item">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="nav-item">About</li>
            </NavLink>
            <NavLink to="/products">
              <li className="nav-item">Products</li>
            </NavLink>
            <NavLink to="/contact-us">
              <li className="nav-item">Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
