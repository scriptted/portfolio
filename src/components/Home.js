import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="outer-container">
        <Menu/>
          <main id="page-wrap">
            <Header />
          </main>
        </div>
      </React.Fragment>
    );
  }
}
