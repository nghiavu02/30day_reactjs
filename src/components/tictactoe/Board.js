import React from 'react'
import Cell from './Cell'
import { caculateWinner } from './helper'

const Board = (props) => {
    // const show = () =>{
    //     const cells = [null, null,'x' , 'x', 'x', null, null, null, null]
    //     console.log(caculateWinner(cells))
    // }
    // show()
  return (
    <div className='game-board'>

      {props.cells.map((item, index) =>(
          <Cell key={index} onClick={() => props.onClick(index)} value={item} className={item == 'X' ? 'is-x' : item == 'O' ? 'is-o' : ''}></Cell>
      ))}  
      
    </div>
  )
}

export default Board
