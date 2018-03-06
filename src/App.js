import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import BudgetAllocation from './components/budgetAllocation';
import Home from './components/home';
import Root from './components/root';
import Error from './components/error';

class App extends Component {

  render() {
    return (
      <Router>
         <div>
         <Route path='/' component={Root}/>
            <Switch>
                 <Route exact path='/home' component={Home} />
                 <Route path='/budgetAllocation' component={BudgetAllocation} />
                 <Route path='/error' component={Error} />
                 <Redirect to="/home" />
            </Switch>
         </div>
      </Router>
    );
  }
}

export default App;
