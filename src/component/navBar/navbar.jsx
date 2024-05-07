import './navbar.scss';
import React, { useState } from 'react';


function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/dashboard" className="logo">
          <img src="/logo.png" alt="" />
          <span>Care</span>
        </a>
        <a href="/dashboard">Dashboard</a>
        <a href="/configuration">Configuration</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>

      <div className="right">
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
        
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/dashboard">Dashboard</a>
          <a href="/configuration">Configuration</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

