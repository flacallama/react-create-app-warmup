import React, { Component } from 'react';
import TodoList from './components/TodoList.js';
import AddList from './components/AddList.js';
import './App.css';

class App extends Component {

  state = {
    todos: ['take out trash', 'do laundry', 'conquer the world', 'eat cake to celebrate']
}

  addItemFunction = (item) => {
    this.setState({
      todos: this.state.todos.concat(item)})
  }


  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos}/>
        <AddList
          addItemFunction={this.addItemFunction}/>
      </div>
    );
  }
}

export default App;
