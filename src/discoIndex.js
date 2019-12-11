import React, { Component } from 'react';

import { Link } from 'react-router-dom';

const seasons = [
  {id: 1, name: "Indies", slug: "shk0"},
  {id: 2, name: "Major Releases", slug: "shk1"}
];

class DiscoIndex extends Component {
  render() {
    return (
      <div>
        <h1>Seasons</h1>
        <ul>{
          seasons.map( season =>
            <li key={season.id}><Link to={`/${season.slug}`}>
              {season.name}</Link></li>
          )
        }</ul>
      </div>
    )
  }
}

export default DiscoIndex;