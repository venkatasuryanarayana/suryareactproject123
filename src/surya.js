// import React,{ Component } from 'react';

// class Surya extends Component{
// 	//automatically calling object
// 	constructor(){
// 		super();
// 		this.state={
// 			name:"Surya",
// 			bestfriend:"Hanuman"
// 		}
// 	}

// 	changeState=()=>{
// 		this.setState({
// 			name:"Venkata",
// 			bestfriend:"Surya"
// 		})
// 	}
	
// 	render(){

// 		return(
// 			// <h2>{this.props.name}</h2>
// 			<div>
// 			<h2>{this.state.name}</h2>
// 			<h1>{this.state.bestfriend}</h1>
// 			<button onClick={this.changeState}>Click me</button>
// 						</div>
// 			);
// 	}
// }
import React from 'react';


class Surya extends React.Component{
	render(){
		return(
          <h2>{this.props.name} Role is : {this.props.role}</h2>
		);
	}
}
export default Surya;