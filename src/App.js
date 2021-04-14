import React from "react";
import Footer from './Footer';
import Home from "./Home";
import Result from "./Result";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result" component={Result} />
          <Route path="/result/:id" component={ItemDetails} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
