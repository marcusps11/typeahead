import React, { Component } from 'react';
import httpService from '../services/httpService.js'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <input type="text" onChange={(event) => this.props.onChange(event)} placeholder="Search."/>
    );
  }
 }
