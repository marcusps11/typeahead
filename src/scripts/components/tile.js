import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Child from './child.js';

const Tile = ({template}) => (

  <div>
    {template.map((item, index) =>
      <Link key={index} to={{pathname: `/film/${item.imdbID}`  }}>
       <div >{item.Title}</div>
       <img src={item.Poster}/>
      </Link>
    )}


  </div>

);

export default Tile;
