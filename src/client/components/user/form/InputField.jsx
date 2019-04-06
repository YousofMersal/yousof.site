import React, { Component } from 'react'

export default class InputField extends Component {
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          placeholder={this.props.placeholder}
          value={this.props.val}
          onChange={this.props.pasedfunc}
          onKeyPress={e => this.props.onKeyPress(e)}
        />
      </div>
    )
  }
}
