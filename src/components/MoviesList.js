import React from 'react'
import Movie from './Movie'
import {connect} from 'react-redux'

function MoviesList(props) {
    let movies = props.movies.map(e => {
        return (
            <Movie movie={e} key={e.id}/>
        )
    })
    return (
        <div>
            <h1>Movies</h1>
            {movies}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesList)