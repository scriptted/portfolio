import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/Header.css';
import logo from './img/logo_full.png';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <section class="container h-100">
          <section class="row align-items-center h-100">
            <section class="col-sm-12 text-center">
              <img src={logo}/>
            </section>
          </section>
        </section>
      </header>
    );
  }
}
