import "./App.css";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { Spinner } from "./components/loader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Navbar />

              <div className="container-fluid">
                <div className="container-md py-5">
                  <h2 className="text-center text-white container-fluid animate__animated animate__zoomIn">
                    Twitter Video Downloader
                  </h2>
                  <br />
                  <Form />
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
