import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import httpService from '../services/httpService.js'

class ShowFilm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data:{}
    }
  }

  componentDidMount() {
    httpService.getFilmById(this.props.match.params.id)
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

  getFullElement() {
    return(
    <div className="film-item">
      <div className="film-item__info-container">
        <h1>{this.state.data.Title}</h1>
        <p>{this.state.data.Plot}</p>
      </div>
      <div className="film-item__image-container">
        <img src={this.state.data.Poster}/>
      </div>
    </div>
    )
  }

  render() {
    const sectionMarkup = this.state.data ? this.getFullElement() : null;
    return (
      <div className="film-item__content-container">
        <h1>Detail Page</h1>
        {sectionMarkup}
      </div>
    );
  }
}

export default ShowFilm;
