import React from 'react'

class ListItem extends React.Component{
  render(){

    let listItems = this.props.todos.map(function(item, i){
      return (
        <li key={i}>{item}</li>
      )
    } )
    return(
      <div>
        {listItems}
      </div>


    )
  }
}


export default ListItem;
