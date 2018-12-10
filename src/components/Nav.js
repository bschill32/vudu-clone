import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Nav(props) {
    return(
        <div id='navbar'>
            <h1 className='logo' onClick={() => props.history.push('/')}>Surf'sUp</h1>
            <div className="links">
                <a href='#home'>Home</a>
                <a href='#boards'>Surfboards</a>
                <a href='#team'>Team</a>
                <a href='#about'>About</a>
                <a href='#cart'><i class="fas fa-cart-arrow-down"></i></a>
                {/* <a href='#contact'>Contact</a> */}
                {/* <Link to='/'>Home</Link>
                <Link to='/surfboards'>Boards</Link>
                <Link to='/cart'>Cart</Link> */}
            </div>
        </div>
    )
}

export default withRouter(Nav)