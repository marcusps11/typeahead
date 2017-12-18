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

  constructTile(tile, index) {
    return(
      <div className="tile-container">
        <img src={tile.Poster} />
      </div>
    )
  }

  getFullElement() {
    const template = this.state.data.Search.map(this.constructTile.bind(this))
    return template;
  }

  render() {
    const sectionMarkup = this.state.data.Search && this.state.data.Search.length ? this.getFullElement() : null;
    return (
      <div>
      <Search onChange={(event) => this.onChange(event)}/>
        {sectionMarkup}
      </div>
    )
  }
}

const App = () => (
  <div>
    <Main />
  </div>
);


ReactDOM.render((
    <App />
), document.getElementById('root'))
