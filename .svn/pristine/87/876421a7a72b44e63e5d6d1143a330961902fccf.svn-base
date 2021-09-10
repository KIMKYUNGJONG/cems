import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IRoute {
  path: string;
  render: any;
  exact?: boolean;
  isLogin?: string | null;
}
function AuthenticatedRoute({ path, render, exact, isLogin }: IRoute) {
  return (isLogin === 'true') ? (<Route path={path} render={render} />) : (<Redirect to="/login" />);
}

export default AuthenticatedRoute;