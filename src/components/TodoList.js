import React from 'react'
import ListItem from './ListItem.js'

class TodoList extends React.Component{
  render(){
    return(
      
      <ul>
        <ListItem todos={this.props.todos}/>
      </ul>



    )
  }
}


export default TodoList;
