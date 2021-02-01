import React from "react";
import { Route, Switch } from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome'
import Clock from './Components/Clock/Clock'
import Contact from './Components/Contacts/Contact'
import Navigation from './Components/Navigation/Navigation'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
import Jeopardy from './Components/Jeopardy/Jeopardy'

function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
        <Route 
            exact 
            path="/" 
            render={(props) => <Welcome {...props} name="Cameron" />} 
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/welcome/:name" component={Welcome} />
          <Route path="/jeopardy" component={Jeopardy} />
         
          <Route component={NotFoundPage} />
          
          
         </Switch>
         </div>
      
    );
  }


export default App;
