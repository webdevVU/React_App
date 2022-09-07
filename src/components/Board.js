import React, {useState} from 'react'
import Box from './Box'



const Board = () => {
  const [state, setState] = useState(Array(9).fill(null))
  const [playerXTurn, setPlayerXTurn] = useState(true);
  
  const checkWinner = () => {
  const winnerLogic =[[0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for (let logic of winnerLogic) {
    const [a,b,c] = logic;
    if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
      return state[a];
    }
  }

  return false;
  }
  
  const isWinner = checkWinner()

  const handleClick = (index) => {
    if(state[index] !== null) {
      return;
    }
    const copyState = [...state]
    copyState[index] = playerXTurn ? "X" : "O";
    setState(copyState);
    setPlayerXTurn(!playerXTurn);
   }
  const handleReset = () => {
    setState(Array(9).fill(null));
  }
  
  return (
    <div>
      <div className='container text-center pt-3 pb-3'>
        <h1 className='fw-600' style={{fontSize:'70px'}}>tic - <span style={{color:'red'}}>tac</span> - toe</h1>
      </div>
     <div className='container pt-3'>
      {isWinner ? (
      <h3>{isWinner} won the game!</h3>
      ):(
      <>
      <div className='b-row'>
        <Box onClick={() => handleClick(0)} value={state[0]}/>
        <Box onClick={() => handleClick(1)} value={state[1]}/>
        <Box onClick={() => handleClick(2)} value={state[2]}/>
      </div>
      <div className='b-row'>
        <Box onClick={() => handleClick(3)} value={state[3]}/>
        <Box onClick={() => handleClick(4)} value={state[4]}/>
        <Box onClick={() => handleClick(5)} value={state[5]}/>
      </div>
      <div className='b-row'>
        <Box onClick={() => handleClick(6)} value={state[6]}/>
        <Box onClick={() => handleClick(7)} value={state[7]}/>
        <Box onClick={() => handleClick(8)} value={state[8]}/>
      </div>
      </>)}
    </div>
    <div className='container text-center pt-5'>
      <button className='btn btn-outline-dark fw-600 px-4 py-2 fs-4' style={{border:'3px solid #212529'}} onClick={handleReset}>Reset</button>
    </div>
    </div>
   
  )
}

export default Board;