import { Home, NotFound } from "../pages";

import { Switch, Route } from "react-router-dom";

function Router() {
  return (
    <div className="container-fluid p-0 m-0">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
