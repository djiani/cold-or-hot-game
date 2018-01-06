import React from 'react'
import GuessForms from './guess_form';
import './guess.css';

export default function Guess(props){
  return(
    <div className="guess" >
      <GuessForms onPlay={num =>props.onPlay(num)} gameState={props.gameState}/>
      <h3>Guess # <span className="counter_Guess">{props.numberOfTrial}</span>
      </h3>
    </div> 
    )
}