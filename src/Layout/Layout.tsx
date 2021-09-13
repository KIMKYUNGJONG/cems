/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset } from 'styled-reset';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { DarkTheme, LightTheme } from '../constant/theme';
import DashboardContainer from '../containers/DashboardContainer';
import LoginContainer from '../containers/LoginContainer';
import ReportContainer from '../containers/ReportContainer';
import AdminContainer from '../containers/AdminContainer';

import AuthenticcateRoute from '../Routes/AuthenticateRoute';

const Layout = ({ match }: any) => {
  const [theme, setTheme] = useState<Theme>('light');
  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };
  type Theme = keyof typeof themes

  const changeTheme = (checked: boolean) => {
    if (checked) setTheme('dark');
    if (!checked) setTheme('light');
  };
  const isLogin = sessionStorage.getItem('isAuthorized');
  const isAdmin = sessionStorage.getItem('isAdmin');
  const [scene, setScene] = useState<string | unknown>('scenes/ioe/securebiz/mdf_room 40_10.11.json');
  const [graphValue, setHtValue] = useState<object | unknown>({});
  const handleGraphView: (param: object) => void = function (param) {
    setHtValue(param);
  };
  const handleScene: (param: string) => void = function (param) {
    setScene(param);
  };
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Navbar isLogin={isLogin} isAdmin={isAdmin} htValue={graphValue} changeTheme={changeTheme} handleScene={handleScene} />
      <Switch>
        <Route exact path="/">
          {(isLogin === 'true') ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          {(isAdmin === 'true') ? <Redirect to="/admin" /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path={'/login'} component={LoginContainer} />
        <AuthenticcateRoute
          exact
          isLogin={isLogin}
          path={'/dashboard'}
          render={() => <DashboardContainer htValue={graphValue} handleGraphView={handleGraphView} scene={scene} />}
        />
        <AuthenticcateRoute
          path={'/report'}
          isLogin={isLogin}
          render={() => <ReportContainer />}
        />
        <AuthenticcateRoute
          path={'/admin'}
          isLogin={isLogin}
          render={() => <AdminContainer />}
        />
      </Switch>
    </ThemeProvider>
  );
};
const GlobalStyle = createGlobalStyle`
      ${reset}

      body {
        width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'NanumSquare', 'Roboto', 'sans-serif', 'arial';
      background-color: #dbd7d7;
    }
      input[type='password'] {
        font-family: 'sans-serif';
        -webkit-text-security: disc !important;
      }
      button {
      appearance: none;
      outline: none;
      border: none;
      background: none;
      cursor: pointer;
    }
      `;

export default Layout;
