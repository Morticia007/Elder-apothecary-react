import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import EaNavBar from './NavBarComponent';
import Home from './HomeComponent';
class Main extends Component {
  render() {
   return(
     <React.Fragment>
     <EaNavBar />
     <Switch>
     <Route exact path='/' component={Home} />
     
    <Redirect to='/' />

  </Switch>
</React.Fragment>
   );
  }
}
export default Main;