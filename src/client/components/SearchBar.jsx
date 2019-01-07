import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.passedFunction}
        onKeyPress={e => this.props.keypress(e)}
      />
    )
  }
}
