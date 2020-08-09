import React, { Component } from 'react'
import Score from './components/Score'
import logo from './logo.svg'
import './App.css'
import Solution from './components/Solution'
import Letters from './components/Letters'
import EndGame from './components/EndGame'

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solutions: [
        {
          word: 'KUNDOFONI',
          hint: 'Solomonico fundementalist helper',
        },
        {
          word: 'JUVE',
          hint: 'Black and white soccer team',
        },
        {
          word: 'JAVASCRIPT',
          hint: 'Just another programing language',
        },
        {
          word: 'HONDA',
          hint: 'Japanies car manufacturer',
        },
      ],
      score: 100,
      currentWord: 0,
    }
  }
  restart = () => {
    let newCurrentWord =
      this.state.currentWord === this.state.solutions.length - 1
        ? 0
        : this.state.currentWord + 1
    this.setState({
      currentWord: newCurrentWord,
      score: 100,
      letterStatus: this.generateLetterStatuses(),
    })
  }
  isGameOver = () => {
    if (this.state.score === 0) return true
    let gameOver = true
    for (
      var i = 0;
      i < this.state.solutions[this.state.currentWord].word.length;
      i++
    ) {
      if (
        this.state.letterStatus[
          this.state.solutions[this.state.currentWord].word.charAt(i)
        ] !== true
      )
        gameOver = false
    }
    return gameOver
  }
  letterCorrect = letter => {
    return this.state.solutions[this.state.currentWord].word.includes(letter)
  }
  selectLetter = letter => {
    const newScore = this.letterCorrect(letter)
      ? this.state.score
      : this.state.score - 10
    let lettersObject = this.state.letterStatus
    lettersObject[letter] = true
    this.setState({
      letterStatus: lettersObject,
      score: newScore,
    })
  }
  generateLetterStatuses() {
    const letters = {}
    for (let i = 65; i <= 90; i++) {
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }
  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution
          solution={this.state.solutions[this.state.currentWord]}
          letterStatus={this.state.letterStatus}
        />
        <Letters
          selectLetter={this.selectLetter}
          letterStatus={this.state.letterStatus}
        />
        {this.isGameOver() && (
          <EndGame
            restart={this.restart}
            score={this.state.score}
            word={this.state.solutions[this.state.currentWord].word}
          />
        )}
      </div>
    )
  }
}

export default App
