import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Child from './child.js';

const Tile = ({template}) => (
<Router>

  <div>
    {template.map((item, index) =>
      <Link component={Child} key={index} to={{pathname: `/${item.imdbID}`  }}>
       <div >{item.Title}</div>
      </Link>
    )}

  <Route path="/:id" component={Child}/>

  </div>
</Router>

);

export default Tile;
