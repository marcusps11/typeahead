import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js'

class Main extends Component {

  render() {
    return (
      <div>
      <Search/>
      </div>
    )
  }
}

ReactDOM.render((
    <Main />
), document.getElementById('root'))
