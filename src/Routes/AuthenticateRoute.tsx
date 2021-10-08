import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isTokenExpired } from '../lib/apiUser';

interface IRoute {
  path: string;
  render: any;
  exact?: boolean;
  isLogin?: string | null;
}
function AuthenticatedRoute({ path, render, exact, isLogin }: IRoute) {
  console.log('token ', localStorage.getItem('token'));
  // console.log('isTokenExpired() ', isTokenExpired());
  
  // isTokenExpired().then(result => {
  //   if(result.data) {
  //     return (<Redirect to="/login" />);
  //   }else {
  //     return (<Route path={path} render={render} />);
  //   }
  // });  

  return (localStorage.getItem('token')) ? (<Route path={path} render={render} />) : (<Redirect to="/login" />);
}

export default AuthenticatedRoute;