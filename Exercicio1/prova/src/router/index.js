import React from "react";
import { BrowserRouter, Route, Switch,  } from "react-router-dom";
import Home from "../Pages/Home";





const Routes = () => (
  <BrowserRouter>
    <Switch>
    
      <Route exact path="/" component={() => <Home/>}></Route>
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;