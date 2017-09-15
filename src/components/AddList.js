import React from 'react'

class AddList extends React.Component{

  state = {
    newItem: ''
  }

  clickHandler = () => {
    this.props.addItemFunction(this.state.newItem)
    this.setState({newItem: ''})
  }

  render(){
    return(
      <div>
          <input
            type='text'
            value={this.state.newItem}
            onChange={(e)=>this.setState( {newItem: e.target.value})}/>
          <button onClick={this.clickHandler}> button </button>
      </div>


    )
  }
}


export default AddList;
