import React, { Component } from 'react'
class Score extends Component {
  render() {
    let color =
      this.props.score < 80
        ? this.props.score < 50
          ? 'red'
          : 'orange'
        : 'green'
    return <div className={color}>Score: {this.props.score}</div>
  }
}

export default Score
