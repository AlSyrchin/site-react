import React from 'react';
import './header_body.css';

function NavMenu() {
  return (
    <nav className="menu">
      <img className="menu__logo" src="./img/logo.png" alt="image" />
      <ul className="menu__title">
        <li><a href="#">Home</a></li>
        <li><a href="#Info">About</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Feedback">Feedback</a></li>
        <li><a href="#Product">Product</a></li>
      </ul>
    </nav>
  );
}

function IconMenu() {
  return (
    <ul className="iconNet">
      <li><a href="#">VK</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Telegram</a></li>
      <li><a href="#">Facebook</a></li>
    </ul>
  );
}

export default function HeaderBody() {
  return (
    <div className="header-contaner">
      <div className="wrapper">
        <NavMenu />
        <div className="contener_row">
          <div className="box_left">
            <h2>Glass<br />Morphism</h2>
            <h3>mockup.</h3>
            <div className="box_under-left">
              <button className="button_glass btn_head">Shop</button>
              <button className="button_glass btn_head">Check</button>
              <p><span>Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="box_right">
            <IconMenu />
          </div>
        </div>
      </div>
    </div>
  );
}