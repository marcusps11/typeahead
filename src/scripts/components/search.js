import React, { Component } from 'react';
import httpService from '../services/httpService.js'

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const queryString = event.target.value;
    httpService.getFilmData(queryString)
    .then(response => console.log(response))
  }

  render() {
    return (
      <input type="text" onChange={this.onChange} placeholder="Search."/>
    );
  }
 }
