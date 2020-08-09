import React, { Component } from 'react'
class EndGame extends Component {
  render() {
    return (
      <div>
        {(this.props.score === 0 && (
          <span>HO NO! YOU LOST! The word was {this.props.word}</span>
        )) || <span>HORRAY! YOU WON!</span>}
        <div>
          <button onClick={this.props.restart}>RESTART</button>
        </div>
      </div>
    )
  }
}

export default EndGame
