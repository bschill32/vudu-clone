import React, { Component } from 'react';
import './App.css';
import BoardsList from './components/BoardsList'
import Home from './components/Home'
import Team from './components/Team'
import Contact from './components/Contact'
import Cart from './components/Cart'
import axios from 'axios'
import Nav from './components/Nav'
import {connect} from 'react-redux'
import {getBoards} from './ducks/reducer'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    axios.get('/api/boards').then(results => {
      this.props.getBoards(results.data)
    })
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className='anchorContainer smooth-scroll' >
          <Home/>
          <BoardsList/>
          <Team/>
          <Contact/>
          <Cart/>
        </div>
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/surfboards' component={BoardsList} />
          <Route path='/cart' component={Cart} />
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(connect(null, {getBoards})(App))