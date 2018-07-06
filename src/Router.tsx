import * as React from 'react';
import {Route, Switch} from "react-router";
import Index from "./pages/Index";
import {Manager} from "./pages/Manager";
import Words from "./pages/Words";
import Login from "./pages/Login";
import Redirector from "./components/Redirector";

export default () => {
  return (
      <Switch>
        <Route exact={true} path="/" component={Index}/>
        <Route exact={true} path="/browse" component={Index} />
        <Route exact={true} path="/browse/words" component={Words}/>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/manage" component={Index}/>
        <Route exact={true} path= "/manage/words" component={Manager}/>
        <Route path="*" component={Redirector} />
      </Switch>
  )
}