import React, { Component } from 'react';

class Header extends Component {
  state = {
    value: ""
  }
  handleChange = ({ target: { value } }) => {
    this.setState(() => ({ value }))
  }
  handleEnter = ({ keyCode }) => {
    if (this.state.value && keyCode === 13) {
      this.props.addUndoItem(this.state.value)
      this.setState(() => ({ value: "" }))
    }
  }
  render() {
    return (
      <div className="header">
        <div className="header-content">
          TodoList
        <input placeholder="Add Todo" className="header-input" onKeyUp={this.handleEnter} value={this.state.value} onChange={this.handleChange} data-test="input"></input>
        </div>
      </div>
    );
  }
}

export default Header;
