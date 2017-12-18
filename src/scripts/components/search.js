import React, { Component } from 'react';
import httpService from '../services/httpService.js'

 const Search = ({onChange}) => (
  <input type="text" onChange={onChange} placeholder="Search."/>
);

export default Search;
