import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from "./components/homepage";
import Header from "./components/header/Header";

const App = () => {
  return(
    <>
    <Router>
      <Header />
      <Switch> 
        <Route path="/" component={HomePage} exact/>
      </Switch>
    </Router>
    </>

  )
}

export default App;