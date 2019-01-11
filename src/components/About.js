import React, { Component } from 'react';
import Home from './Home';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <section class="content">
          <h2>About</h2>
        </section>
      </React.Fragment>
    );
  }
}
