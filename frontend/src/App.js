import React from "react";
import { BrowserRouter as Router,Route,Redirect,Switch } from "react-router-dom";
import Users from "./User/Pages/Users";
import NewPlaces from "./Places/Pages/NewPlaces";

import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
const App= ()=>
{
  return (
  <Router>
    <MainNavigation/>
    <main>
    <Switch>
    <Route path="/" exact>
     <Users/>
    </Route>
    <Route path="/places/new" exact>
      <NewPlaces/>
    </Route>
    <Redirect to="/"/>
    </Switch>
    </main>
  </Router>
  );
};
export default App;