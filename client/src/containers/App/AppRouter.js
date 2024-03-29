import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../Dashboard/index')),
  },
  {
    path: 'assets',
    component: asyncComponent(() => import('../Assets')),
  },

  // {
  //   path: "clients/new",
  //   component: asyncComponent(() => import("../Clients/ClientForm/index"))
  // },

  // {
  //   path: "clients",
  //   component: asyncComponent(() => import("../Clients/ClientsTable/index"))
  // }
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map((singleRoute) => {
          const { path, exact, ...otherProps } = singleRoute;
          return <Route exact={exact === false ? false : true} key={singleRoute.path} path={`${url}/${singleRoute.path}`} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default AppRouter;
