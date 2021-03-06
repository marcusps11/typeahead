import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search.js'
import Tile from '../components/tile.js'
import httpService from '../services/httpService.js'
import {
  BrowserRouter,
  BrowserHistory,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{}
    };
  }

  onChange(event) {
    const queryString = event.target.value;
    httpService.getFilmData(queryString)
    .then(this.onDataResponse.bind(this))
    .catch(this.handleXhrError)
  }


  onDataResponse(response) {
    if (response.status === 200) {
      this.updateState({data: response.data})
    }
  }

  updateState(props) {
    this.setState((prevState) => {
      return Object.assign({}, prevState, props);
    });
  }

  handleXhrError(error) {
    console.log(error);
  }

  getFullElement() {
    return <Tile template={this.state.data.Search}  />
  }

  render() {
    const sectionMarkup = this.state.data.Search && this.state.data.Search.length ? this.getFullElement() : null;
    return (
      <div className="home">
      <h1>TYPEAHEAD</h1>
      <Search onChange={(event) => this.onChange(event)}/>
        {sectionMarkup}
      </div>
    )
  }
}

export default HomeContainer;
