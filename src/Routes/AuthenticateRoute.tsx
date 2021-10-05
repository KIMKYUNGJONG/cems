import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IRoute {
  path: string;
  render: any;
  exact?: boolean;
  isLogin?: string | null;
}
function AuthenticatedRoute({ path, render, exact, isLogin }: IRoute) {
  console.log('token ', localStorage.getItem('token'));
  
  return (localStorage.getItem('token')) ? (<Route path={path} render={render} />) : (<Redirect to="/login" />);
}

export default AuthenticatedRoute;