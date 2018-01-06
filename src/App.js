import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feedback from './components/feedback';
import Guess from './components/guess';
import History from './components/history';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      feedback: 'Make Your Guess',
      guesses: [],
      numberOfTrial: 0,
      number_to_Guess: this.getRamdonNumber(),
      gameState: 'start'
    }
  }

  getRamdonNumber(){
    //generate a random number between 0 and 100;
    const rand = Math.floor((Math.random())*101)

    console.log("rand= "+ rand);
    return(rand);
  }

  setGuesses(lastGuess){
    this.setState({
      guesses: [...this.state.guesses, lastGuess]
    })
  }

  setFeedback(feedback){
    this.setState({
      feedback
    })
  }
  setNumberToGuess(){
    this.setState({
      number_to_Guess: this.getRamdonNumber()
    })
  }

  IncNumberOfTrial(){
    this.setState({
      numberOfTrial: this.state.numberOfTrial +1
    })
  }

  resetGame(){
    this.setState({
      gameState: 'start',
      feedback: 'Make Your Guess',
      numberOfTrial: 0,
      guesses: [],
      number_to_Guess: this.getRamdonNumber()

    })
  }

  setGameState(gameState){
    this.setState({
      gameState
    })
  }

  playGame(userGuess){
    this.IncNumberOfTrial();
    this.setGuesses(userGuess); 
    if (Math.abs(this.state.number_to_Guess - userGuess)=== 0){
      this.setFeedback("Congrats, Your found it!!");
      this.setGameState('end');
    }
    else if(Math.abs(this.state.number_to_Guess - userGuess)<= 10){
      this.setFeedback("Hot");
    }
    else{
      this.setFeedback("Cold");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcometo Hot_or_Cold Game!!!</h1>
          <button className="new_game" onClick={e=>{this.resetGame()}}> Start a new Game </button>
        </header>
        <div className="mainContainer">
          <Feedback feedback={this.state.feedback} />
          <Guess onPlay={num => this.playGame(num)} numberOfTrial={this.state.numberOfTrial} gameState={this.state.gameState}/>
          <History guesses={this.state.guesses}/>
        </div>
      </div>
    );
  }
}

export default App;
