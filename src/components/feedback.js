import React from 'react';
import './feedback.css';

export default function Feedback(props){

  return(
    <div className="feedback" aria-live="polite"> 
    <h2> {props.feedback} </h2>
    </div>
    );
}