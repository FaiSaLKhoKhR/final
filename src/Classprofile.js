// Class Base Component abc-4
import React, { Component } from 'react'

export default class Classprofile extends Component {
constructor(){
    super();
    this.state = {
        name: 'Faisal  - abc-4',
        email: 'faisal.khokhar177@gmail.com'
    }
}
  render() {
    return (
        <>
        <h1 style={{color:'#d23669'}}>Welcome to (Classprofile) Component (Div abc-4)</h1>
      <div>
{this.state.show ? <>
        <h3>[Class-Base-Component = (Classprofile)]</h3> 
        <h1>Hello {this.state.name}</h1>
        <h1>email: {this.state.email}</h1> 
        </>
        :null}
      </div>



      <div>
        {/* {this.state.show ? <h1>hide and show</h1> : null}      */}
        <button style={{padding: "5px",margin:"10px",backgroundColor:"skyblue"}} onClick={()=>{this.setState({show:!this.state.show})}}>Toggle me</button>
        
      </div>

      </>
    )
  }
}
