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
                <h1 className="board-header">SurfBoards</h1>
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