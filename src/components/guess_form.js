import React from 'react'
import './guess_form.css';

export default class GuessForms extends React.Component{
  constructor(props){
    super(props);
  }

  
  onSubmit(event){
    event.preventDefault();
    const num= this.userGuess.value.trim();
    if(this.props.gameState == 'end'){
      alert('Game over, Click "Start a new Game" to replay again');
    }else{
      if(num && this.props.onPlay){
        console.log(num);
        this.props.onPlay(num);
      }
      this.userGuess.value = '';
    }
  }


  render(){
    return(
      <form  onSubmit={e => this.onSubmit(e)} className="guess_form">
        <label htmlFor="guessNumber" className="read-only"></label>
        <input type="text" id="guessNumber" name="guessNumber" placeholder="Enter your Guess"
        ref={input => this.userGuess = input}/>
        <button className="btn_guess" > Guess </button>
      </form> 
    ) 
  }
  
}