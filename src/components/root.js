import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import '../index.css';
class Root extends Component {

  render() {
    return (
         <div>
            <div id="header">
              <Header/>
            </div>
            <div>
              {this.props.children}
            </div>
            <div>
              <Footer/>
            </div>
         </div>
    );
  }
}

export default Root;
