import React, { Component } from 'react';

class Header extends Component {
  state = {
    value: ""
  }
  handleChange = ({ target: { value } }) => {
    this.setState(()=>({ value }))
  }
  handleEnter = ({ keyCode }) => {
    if (this.state.value && keyCode === 13) {
      this.setState(()=>({value:""}))
      this.props.addUndoItem()
    }
  }
  render() {
    return (
      <div>
        <input onKeyUp={this.handleEnter} value={this.state.value} onChange={this.handleChange} data-test="input"></input>
      </div>
    );
  }
}

export default Header;
