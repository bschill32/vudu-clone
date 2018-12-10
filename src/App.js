import React, { Component } from 'react';
import './App.css';
import BoardsList from './components/BoardsList'
import Home from './components/Home'
import Team from './components/Team'
import About from './components/About'
import Cart from './components/Cart'
import Contact from './components/Contact'
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

  withScroll = e => {
    let navbar = document.getElementById('navbar')
    let anchorContainer = document.querySelector('.anchorContainer')
    if(e.target.scrollTop || e.target.scrollTop === 0) {
      if (e.target.scrollTop <= 75) {
          navbar.className = ''
        } else {
            navbar.className = 'scroll'
        }
    }
    else {
        if (e.target.scrollingElement.scrollTop <= 100) {
            navbar.className = ''
        } else {
            navbar.className = 'scroll'
        }
    }
    console.log(anchorContainer.className)
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className='anchorContainer smooth-scroll' onScroll={this.withScroll} >
          <Home/>
          <BoardsList/>
          <Team/>
          <About/>
          <Cart/>
          {/* <Contact/> */}
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