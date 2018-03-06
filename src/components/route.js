import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import Header from './header';
import BudgetAllocation from './budgetAllocation';

class Routing extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/budgetAllocation' component={BudgetAllocation} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default Routing;
