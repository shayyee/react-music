import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MHeader from "../components/m-header/m-header";
import Tab from '../components/tab/tab'
const Recommend = lazy(() => import(/* webpackChunkName: "recommend" */"../components/recommend/recommend"));
const Rank = lazy(() => import(/* webpackChunkName: "rank" */"../components/rank/rank"));
const Singer = lazy(() => import(/* webpackChunkName: "singer" */"../components/singer/singer"));
const Search = lazy(() => import(/* webpackChunkName: "search" */"../components/search/search"));

const getRouter = () => (
  <Router>
    <div>
      <MHeader />
      <Tab />
      <Suspense fallback={<div></div>}>
        <Switch>
            <Route exact path="/">
                <Redirect to="/recommend"/>
            </Route>
          <Route path="/recommend" component={Recommend} />
          <Route path="/singer" component={Singer} />
          <Route path="/rank" component={Rank} />
          <Route path="/search" component={Search} />
        </Switch>
      </Suspense>
    </div>
  </Router>
);

export default getRouter;
