import React, { Component } from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <input type="text" onChange={this.onChange} placeholder="Search."/>
    );
  }
 }
