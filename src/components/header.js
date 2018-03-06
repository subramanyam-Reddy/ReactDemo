import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class header extends Component {
  render() {
      return (
        <div>
            <div className="navbar-header col-md-2">
              <img className="img-responsive" src={require('../img/abi_logo.png')} alt="ABI-LOGO" />
            </div>

            <div className="navbar-collapse collapse" id="navbar">
  				      <ul className="nav navbar-nav">
  					         <li><Link to={"Home"} style={{backgroundColor:"white"}}> Optimize </Link></li>
                     <li><Link to={"Error"} style={{backgroundColor:"white"}}> Historical-Review </Link></li>
  					         <li><Link to={"Error"} style={{backgroundColor:"white"}}> Help </Link></li>
  				      </ul>
  				      <ul className="nav navbar-top-links navbar-right">
  					         <li><a href="/logout"> <i className="fa fa-user-circle fa-lg"></i> Log out
  					         </a></li>
  				      </ul>
  			    </div>

        </div>
        );
    }
  }

  export default header;
