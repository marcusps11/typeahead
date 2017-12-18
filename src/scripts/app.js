import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js'
import httpService from './services/httpService.js'


class Main extends Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    const queryString = event.target.value;
    httpService.getFilmData(queryString)
    .then(response => console.log(response))
  }

  render() {
    return (
      <div>
      <Search onChange={(event) => this.onChange(event)}/>
      </div>
    )
  }
}

ReactDOM.render((
    <Main />
), document.getElementById('root'))
