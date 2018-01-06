import React from 'react';
import './history.css';

export default function History(props){
    const guessList = props.guesses.map(
      (guess, index) => <li key={index}> {guess}</li>)
      
    return(
      <div className="history" aria-live="polite">
        <ul className="list">
          {guessList}
        </ul>
      </div>
    );
  
}

