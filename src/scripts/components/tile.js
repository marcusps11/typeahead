import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Child from './show-film.js';

const Tile = ({template}) => (

  <div className="tile__content-container">
    {template.map((item, index) =>
      <div key={index} className="tile__item">
      <Link to={{pathname: `/film/${item.imdbID}`  }}>
        <h2 >{item.Title}</h2>
        <div className="tile__item-image-container">
          <img className="tile__item-image" src={item.Poster}/>
        </div>
      </Link>
    </div>
    )}
  </div>

);

export default Tile;
