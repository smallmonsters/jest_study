import React, { Component } from 'react';
import Header from './components/Header';

class TodoList extends Component {
  state = {
    undoList: []
  }
  addUndoItem = (item) => {
    this.setState(() => ({
      undoList: [item, ...this.state.undoList]
    }))
  }
  render() {
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
      </div>
    );
  }
}

export default TodoList;
