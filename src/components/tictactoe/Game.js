import React, { useState, useReducer } from 'react'
import Board from './Board'
import './GameStyles.css'
import { caculateWinner } from './helper'

const initalState = {
    board: Array(9).fill(null),
    xIsNext: true
}
const gameReducer = (state, action) =>{
    switch (action.type) {
        case 'Click':{
            const {board, xIsNext} = state
            const {index, winner} = action.payload
            if(winner || board[index]) return state
            const nextState = JSON.parse(JSON.stringify(state))     
            nextState.board[index] = xIsNext ? 'X' : 'O'
            nextState.xIsNext = !xIsNext
            return nextState
        }
        case 'Reset':{
            const nextState = JSON.parse(JSON.stringify(state))     
            console.log('Reset game');
            nextState.board =  Array(9).fill(null)
            nextState.xIsNext = true
            return nextState
            break;
        }
        default:
            break;
    }
    return state
}

const Game = () => {

    const [state, dispatch] = useReducer(gameReducer, initalState)
    const winner = caculateWinner(state.board)
    const handleClick = (index) => {
        // const boardCopy = [...state.board]
        // if(winner || boardCopy[index]) return
        dispatch({
            type: 'Click',
            payload: {
                index,
                winner
            }
        })
        // boardCopy[index] = xIsNext ? 'X' : 'O'
        // setBoard(boardCopy)
        // setXIsNext(!xIsNext)
    }
    const handleResetGame = () =>{
        // setBoard(Array(9).fill(null))
        // setXIsNext(true)
        dispatch({
            type: 'Reset',
        })
    }
    return (
    <div className='game'>
        <button className='reset-game' onClick={handleResetGame}>Reset game</button>
        {winner && <div className="game-winner">Winner is {winner}</div>}
        <Board onClick={handleClick} cells={state.board}></Board>
    </div>
  )
}

export default Game
