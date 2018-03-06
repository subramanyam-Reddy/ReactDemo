import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Error extends Component {
  render() {
      return (
        <div className="wrapper row2">
          <div id="container" className="clear">
            <section id="fof" className="clear">
              <div className="hgroup">
                <h1><span><strong>4</strong></span><span><strong>0</strong></span><span><strong>4</strong></span></h1>
                <h2>Error ! <span>Page Not Found</span></h2>
              </div>
              <p>For Some Reason The Page You Requested Could Not Be Found On Our Server</p>
              <p><a href="javascript:history.go(-1)" className="err-nav">&laquo; Go Back</a> / <Link to="/home" >Go Home &raquo;</Link></p>
            </section>
          </div>
        </div>);
}}

export default Error;
