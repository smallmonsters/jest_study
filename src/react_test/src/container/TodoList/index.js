import React, { Component } from 'react';
import Header from './components/Header';
import "./style.css"
import UndoList from './components/UndoList';
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
        <UndoList></UndoList>
        <div>
          <ul>
            {
              this.state.undoList.map((v, i) => <li key={i} >{v}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
