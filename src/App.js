import "./App.css";
import Category from "./components/Category/Category";
import s from "../src/App.module.css";
import AppBar from "./components/AppBar/AppBar";
import { Route } from "react-router";
import { Redirect, Switch } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className={s.container}>
      <AppBar />
      <Suspense fallback={<p>Loadind</p>}>
        <Switch>
          <Route path="/">
            <Category />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
