import React, { Component } from 'react';
import TodoList from './components/TodoList.js'
import './App.css';

class App extends Component {

  state = {
    todos: ['take out trash', 'do laundry', 'conquer the world', 'eat cake to celebrate']
}


  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
