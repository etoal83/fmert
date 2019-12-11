import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DiscoIndex from './discoIndex';
import DiscoPage from './discoPage';

const DISCOGRAPHY = require('./discography');

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={DiscoIndex}/>
        <Route path="/:name" component={DiscoPage}/>
      </BrowserRouter>
    )
  }
}

export default Routes;