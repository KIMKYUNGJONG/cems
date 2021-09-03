/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset } from 'styled-reset';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { DarkTheme, LightTheme } from '../constant/theme';
import DashboardContainer from '../containers/DashboardContainer';
import LoginContainer from '../containers/LoginContainer';
import SmsContainer from '../containers/SmsContainer';
import ReportContainer from '../containers/ReportContainer';

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
      <Navbar isLogin={isLogin} htValue={graphValue} changeTheme={changeTheme} handleScene={handleScene} />
      <Switch>
        <Route exact path="/">
          {isLogin ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={'/login'} component={LoginContainer} />
        <AuthenticcateRoute
          exact
          isLogin={isLogin}
          path={'/dashboard'}
          render={() => <DashboardContainer htValue={graphValue} handleGraphView={handleGraphView} scene={scene} />}
        />
        <AuthenticcateRoute
          path={'/sms'}
          isLogin={isLogin}
          render={() => <SmsContainer />}
        />
        <AuthenticcateRoute
          path={'/report'}
          isLogin={isLogin}
          render={() => <ReportContainer />}
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
      font-family: 'NanumSquare', 'Roboto', sans-serif;
      background-color: #dbd7d7;

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
