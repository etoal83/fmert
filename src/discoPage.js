import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const DISCOGRAPHY = require('./discography');

class DiscoPage extends Component {
  render() {
    const disco = DISCOGRAPHY[this.props.match.params.name];
    console.log(this.props);
    return (
      <div>
        <h2>{disco.name}</h2>
        <ul className="horizons">{
          disco.horizons.map( (title, key) =>
            <li key={key} className="disc">{title}</li>
          )
        }</ul>
        <Link to="/">Go back to index</Link>
      </div>
    );
  }
}

export default DiscoPage;