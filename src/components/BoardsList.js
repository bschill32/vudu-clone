import React from 'react'
import Board from './Board'
import {connect} from 'react-redux'

function BoardsList(props) {
    let boards = props.boards.map(e => {
        return (
            <Board board={e} key={e.id}/>
        )
    })
    return (
            <div id='boards'>
                <div className='page-container'>
                    <h1 className="page-title">Surfboards</h1>
                </div>
                <div className="boards-container">
                    <div className="surfboards">{boards}</div>
                </div>
            </div>
    )
}

function mapStateToProps(state) {
    return {
        boards: state.boards
    }
}

export default connect(mapStateToProps)(BoardsList)