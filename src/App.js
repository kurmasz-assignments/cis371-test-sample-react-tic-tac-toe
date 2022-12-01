/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import './App.css'

const cellSize = 100

function Cell({ value, rindex, cindex }) {
  const style = {
    display: 'inline-block',
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    textAlign: 'center',
    verticalAlign: 'bottom',
    lineHeight: `${cellSize}px`,
    fontSize: '72px'
  }

  const borderStyle = '1px solid black'
  style.borderTop = borderStyle
  // TODO:  Apply to only the "middle" edges

  return (
    // TODO: Add a click handler to recognize when an X or O placed.
    <div className='cell' style={style}>
      {value}
    </div>
  )
}

function Board() {
  // TODO Move this to a useState hook
  const initialBoard = [['', '', ''], ['', '', ''], ['', '', '']]

  const style = {
    margin: '15px',
    width: `${cellSize * 3 + 2}px`,
    height: `${cellSize * 3 + 2}px`,
    backgroundColor: 'lightgray'
  }

  return (
    <div id='board' style={style}>
      {/* TODO The code below only draws one cell.  Instead, iterate over the board and draw a 3x3 grid of cells.*/}
      <Cell/>
    </div>
  )
}

function App() {
  const message = 'Tell whose turn it is and/or if a space is occupied'
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
      <span className='message'>{message}</span>
    </div>
  )
}

export default App
