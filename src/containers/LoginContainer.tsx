import React, { useEffect, useState } from 'react';
import { useAsync } from 'react-async';
import { apiGet } from '../lib/api';
import Login from '../pages/Login/Login';
import { useHistory } from 'react-router-dom';

const fetchClusterData = async () => {
  const res = await apiGet({
    url: 'https://gorest.co.in/public-api/comments',
  });
  return res.data;
};

function LoginContainer({ path, isLogin, component }: any) {
  const clusterData = useAsync({
    deferFn: fetchClusterData,
    initialValue: [],
  });

  const history = useHistory();
  const [isAuth, setAuth] = useState<string>('false');
  // Initialize Websocket
  //const wsClient = new WebSocket(URL, ['Token', "token_body_here"])
  const handleLogin = (value: object): void => {
    (isLogin === isAuth) ? setAuth('true') : setAuth('false');
    sessionStorage.setItem('isAuthorized', isAuth);
    history.push('/dashboard');
  };
  console.log(isAuth);
  useEffect(() => {
    clusterData.run();
  }, []);
  return <Login handleLogin={handleLogin} />;
}

export default LoginContainer;
