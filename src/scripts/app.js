import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home.js'
import Tile from './components/tile.js'
import httpService from './services/httpService.js'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import ShowFilm from './components/child.js';



class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/film/:id" component={ShowFilm}/>
      </Switch>
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
  <BrowserRouter>
    <App />
  </BrowserRouter>

), document.getElementById('root'))
