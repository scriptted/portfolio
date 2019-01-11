import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { slide as Nav } from 'react-burger-menu'
import './css/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <Nav pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ '30%' } right noOverlay>
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="/about">About</Link>
      </Nav>
    );
  }
}
