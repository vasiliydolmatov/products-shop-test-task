import React from 'react';
import { Route, RouteProps, Switch } from 'react-router';
import MainPage from './MainPage';

class Router extends React.Component<RouteProps> {
  public render() {
    return (
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    )
  }
}

export default Router