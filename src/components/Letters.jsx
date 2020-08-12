import React, { Component } from 'react'
import Letter from './Letter'
class Letters extends Component {
  render() {
    return (
      <div>
        <h3>Available Letters</h3>
        {Object.keys(this.props.letterStatus).map(letter => (
          <Letter
            selectLetter={this.props.selectLetter}
            status={this.props.letterStatus[letter]}
            className={this.props.letterStatus[letter] ? 'selected' : ''}
            letter={letter}
          />
        ))}
      </div>
    )
  }
}

export default Letters
