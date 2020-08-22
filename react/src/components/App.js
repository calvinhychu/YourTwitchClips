import React from "react";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
