import React, { Component } from 'react';
var data = [
  {"zone":"North America","country":"Argentina","incremental_nr_percent":0.78,"incremental_nr":4829913.0,"CountryROI":0.4,"global":"","withincountry":"","pnl":''},
  {"zone":"North America","country":"Belgium","incremental_nr_percent":0.28,"incremental_nr":2025257.0,"CountryROI":0.4,"global":'','withincountry':'',"pnl":''},
  {"zone":"North America","country":"Canada","incremental_nr_percent":0.3,"incremental_nr":1.1485998E7,"CountryROI":0.4,'global':'','withincountry':'',"pnl":''},
  {"zone":"North America","country":"Mexico","incremental_nr_percent":0.19,"incremental_nr":1.10376828E8,"CountryROI":0.4,'global':'','withincountry':'',"pnl":''},
  {"zone":"North America","country":"US","incremental_nr_percent":0.12,"incremental_nr":4.8775132E7,"CountryROI":0.4,'global':'','withincountry':'',"pnl":''}]
class budgetAllocation extends Component {
  constructor() {
    super()
    this.state = {
      budget :  data,
      value: 0
    }
  }
  budgetAll(e) {

      let country = e.target.id.split('_');
      if(document.getElementById(`c_${country[1]}`).value === "") {
        document.getElementById(`c_${country[1]}`).value = 0;
      }
      if(document.getElementById(`g_${country[1]}`).value === "") {
        document.getElementById(`g_${country[1]}`).value = 0;
      }
      let global_pricing = document.getElementById(`g_${country[1]}`).value,
      country_pricing = document.getElementById(`c_${country[1]}`).value,
      overall_pricing = parseFloat(global_pricing) + parseFloat(country_pricing)
      document.getElementById(`p_${country[1]}`).innerText = parseFloat(100) - overall_pricing;

      if(overall_pricing > 100) {
        document.getElementById(`p_${country[1]}`).innerText = 0;
        alert('Pricing (%) cannot be more than 100')
        document.getElementById(`g_${country[1]}`).style.borderColor="red";
        document.getElementById(`c_${country[1]}`).style.borderColor="red";
      } else {
        document.getElementById(`g_${country[1]}`).style.borderColor="initial";
        document.getElementById(`c_${country[1]}`).style.borderColor="initial";
      }
  }
  navigate() {
  this.props.history.push('/error')
}
  render() {

    let tbody = this.state.budget.map((budget, index) => {
      return (
      <tr key={index}>
        <td>{budget.zone}</td>
        <td>{budget.country}</td>
        <td>{budget.incremental_nr_percent}</td>
        <td>{budget.incremental_nr}</td>
        <td>{budget.CountryROI}</td>
        <td><input type="number" id={`g_${budget.country}`} ref={`g_${budget.country}`} className = "global-input" onChange={(e) => this.budgetAll(e)} max="100" min="0"  /></td>
        <td><input type="number" id={`c_${budget.country}`} ref={`c_${budget.country}`} className = "global-input" onChange={(e) => this.budgetAll(e)} max="100" min="0" /></td>
        <td id={`p_${budget.country}`} ref={`p_${budget.country}`}>{100}</td>
      </tr>)
    })
    return (

      <div className="row content-block animated fadeInRight" style={{background: 'white'}}>
                <div id="budgetmetrics">
                <div style={{marginBottom: 18}}>
                      <h2 className="texthead">Pricing Optimization Results</h2>
                </div>

                <div className="row justify-content-center region-metrics" style={{width:"94%"}}>
    							<div className="key-metrics">
    								<span>Optimized</span><br/>
    								<span>Results</span><br/>
    								<span>2018</span>
    							</div>
    							<div>
    								<div className="ibox float-e-margins" style={{paddingLeft:40}}>
    									<div className="ibox-content budget-nav-metrics" style={{paddingBottom: 0 + 'px !important'}}>
    										<div className="heading-icon">
                          <img src={require("../img/dollar-coin-stack.png")} width="25" height="22" alt="dollar-coin-stack"/>
    											<h1 className="no-margins metrics-size">$18.2B (0.55%)</h1>
    										</div>
    										<h5 className="metrics-heading">Net Revenue</h5>
    									</div>
    								</div>
    							</div>
    							<div>
    								<div className="ibox float-e-margins"style={{paddingLeft:40}}>
    									<div className="ibox-content budget-nav-metrics">
    										<div className="heading-icon">
                          <img src={require("../img/dollar.png")} width="30" height="22" alt="dollar"/>
    											<h1 className="no-margins metrics-size">$12.19B (0.55%)</h1>
    										</div>
    										<h5 className="metrics-heading" style={{paddingLeft: 45}}>MACO</h5>
    									</div>
    								</div>
    							</div>
                  <div>
    								<div className="ibox float-e-margins"style={{paddingLeft:40}}>
    									<div className="ibox-content budget-nav-metrics">
    										<div className="heading-icon">
                        <img src={require("../img/beer.png")} width="25" height="22" alt="beer"/>
    											<h1 className="no-margins metrics-size">11.54 MM-HL (0.17%)</h1>
    										</div>
    										<h5 className="metrics-heading">Volume</h5>
    									</div>
    								</div>
    							</div>
    							<div>
    								<div className="ibox float-e-margins"style={{paddingLeft:40}}>
    									<div className="ibox-content budget-nav-metrics">
    										<div className="heading-icon">
                          <img src={require("../img/pie-chart.png")} width="25" height="22" alt="pie-chart"/>
    											<h1 className="no-margins metrics-size">50.91%</h1>
    										</div>
    										<h5 className="metrics-heading">Market Share</h5>
    									</div>
    								</div>
    							</div>
    						</div>
                </div>
									<div className="ibox-title"  style={{paddingLeft:100}}>
										<h2>Input for reinvestment</h2>
									</div>
        <div className="ibox-content" style={{paddingLeft:100}}>
            <table className="rwd-table">
              <thead>
                <tr>
                  <th colSpan = "4">Price Optimization Leverage</th>
                  <th colSpan = "4">Re-Invest to Media and Trade</th>
                </tr>
                <tr>
                  <th>Zone</th>
                  <th>Country</th>
                  <th>Incremental NR (%)</th>
                  <th>Incremental Nr</th>
                  <th>Country ROI</th>
                  <th>Push into Global Budget (%)</th>
                  <th>Push into own Country Budget (%)</th>
                  <th>Reflect into PnL Statement (%)</th>
                </tr>
              </thead>
              <tbody>{tbody}
              </tbody>
            </table>
          </div>
          <div>
              <input type="submit" value="Optimize" className = "btn btn-primary pull-right" onClick={()=> this.navigate()}/>
          </div>
        </div>
    );
  }
}

export default budgetAllocation;
