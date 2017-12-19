import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import httpService from '../services/httpService.js'

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data:{}
    }
  }

  componentWillMount() {
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
    console.log('called')
    return(
    <div>
      <h1>{this.state.data.Title}</h1>
    </div>
    )
  }

  render() {
    const sectionMarkup = this.state.data ? this.getFullElement() : null;
    console.log(sectionMarkup)
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        {sectionMarkup}
      </div>
    );
  }
}


export default Child;
