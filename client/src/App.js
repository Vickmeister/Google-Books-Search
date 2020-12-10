import React from "react";
import Nav from "./components/Navbar";
import Search from './components/Search';
import SavedData from './components/SavedData';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={SavedData}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
