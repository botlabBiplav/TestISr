import React from 'react';
import './Background.css';
import CanvasComponent from "./floatingdots";


const Background = () => {
  return (
    <div><div className='fixed blur-[1px] z-[-1]'>{/*<CanvasComponent/>*/}</div>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Background