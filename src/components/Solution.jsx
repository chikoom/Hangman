import React, { Component } from 'react'
import Letter from './Letter'
class Solution extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.solution.word.split('').map(letter => (
            <Letter letter={this.props.letterStatus[letter] ? letter : '_'} />
          ))}
        </h3>
        <h4>Hint: {this.props.solution.hint}</h4>
      </div>
    )
  }
}

export default Solution
