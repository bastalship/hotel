import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { main as mainRoutes, auth as authRoutes } from "./index";

import MainLayout from "./../layouts/MainLayout";
import AuthLayout from "./../layouts/AuthLayout";
import Page404 from "./../pages/Page404";

const childRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  );

const Routes = () => (
  <Router>
    <Switch>
      {childRoutes(MainLayout, mainRoutes)}
      {childRoutes(AuthLayout, authRoutes)}
      <Route
        render={() => (
          <AuthLayout>
            <Page404 />
          </AuthLayout>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
