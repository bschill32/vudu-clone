import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Nav(props) {
    return(
        <div className='nav-bar'>
            <h1 onClick={() => props.history.push('/')}>Vudu</h1>
            <div>
                <Link to='/'>Movies</Link>
                <Link to='/cart'>Cart</Link>
            </div>
        </div>
    )
}

export default withRouter(Nav)