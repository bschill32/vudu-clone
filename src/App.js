import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'
import Cart from './components/Cart'
import axios from 'axios'
import Nav from './components/Nav'
import {connect} from 'react-redux'
import {getMovies} from './ducks/reducer'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    axios.get('/api/movies').then(results => {
      this.props.getMovies(results.data)
    })
  }

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={MoviesList} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, {getMovies})(App))