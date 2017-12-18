import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js'
import httpService from './services/httpService.js'


class Main extends Component {
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

  render() {
    console.log(this.state.data)
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
