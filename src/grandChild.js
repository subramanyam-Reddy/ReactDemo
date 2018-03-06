import React, { Component } from 'react';
class grandChild extends Component {
 constructor() {
   super()
   this.state= {
     array: []
   }
 }
 app() {
   this.refs.list.innerText += this.refs.activity.value
   this.refs.activity.value = ""
 }
 appemp() {
   this.setState({employeeName: this.refs.emp.value})
   this.refs["emp-header"].innerText = 'emp-name'
 }
 render() {
   return (
     <div style={{textAlign: 'center'}}>
       <p ref="header">ToDo</p>
       Todo: <input type="text" ref="activity"/>
       <ol ref="list"> </ol><br/>
       <button onClick={this.app.bind(this)}>Add</button><br/><br/>
       <Todo name={this.state.employeeName} company={this.state.companyName}/>
     </div>
   );

 }

}

export default App;
