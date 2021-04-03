import "./App.css";
import { useState, useEffect } from "react";

import { GridLoader } from "./components/loader";
import Navbar from "./components/Navbar";
import Home from "./components/home";

import { Switch, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <GridLoader />;
  } else {
    return (
      <div className="container-fluid p-0 m-0">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
