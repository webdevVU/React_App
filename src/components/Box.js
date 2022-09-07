import React from 'react'
import './Box.css'

const Box = (props) => {
  return (
    <div 
    onClick={props.onClick}
    className='box'>
        <span className='box-cont'>{props.value}</span>
    </div>
  )
}

export default Box;