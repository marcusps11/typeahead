import React, { Component } from 'react';

const Tile = ({onClick, template}) => (
  <div className="tile-container">
    {template}
  </div>
);

export default Tile;
