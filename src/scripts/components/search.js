import React, { Component } from 'react';
import httpService from '../services/httpService.js'

 const Search = ({onChange}) => (
  <input className="search-box" type="text" onChange={onChange} placeholder="Search."/>
);

export default Search;
