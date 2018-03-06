import React, { Component } from 'react';
import './App.css';
class todo extends Component {
 add() {
   this.refs["company"].style.backgroundColor = 'blue'
   console.log(this.refs["company"].innerText)
 }
 render() {
   return (
     <div style={{textAlign: 'center'}}>
     <h3>emp details</h3>
       <label ref="emp">Emp-Name : {this.props.name}</label><br/>
       <label ref="company">companyName : {this.props.company}</label><br/>
       <button onClick={(e) => this.add(e))}>click</button>
     </div>
   );
 }
}

export default todo;
