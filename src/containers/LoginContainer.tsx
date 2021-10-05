import React, { useEffect, useState, useRef } from 'react';
import { useAsync } from 'react-async';
import { apiGet } from '../lib/api';
import { apiLogin, registerSuccessfulLoginForJwt } from '../lib/apiUser';
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
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Initialize Websocket
  //const wsClient = new WebSocket(URL, ['Token', "token_body_here"])
  const handleLogin = (value: object): void => {
    // console.log('object ' , value);
    // console.log('username ', Object(value)["username"]);

    apiLogin(Object(value)['username'], Object(value)['password'])
      .then((response) => {
        console.log(response);

        if (response.data === 'error') {
          setErrorMessage('로그인 정보를 확인해주세요!');
        } else {
        // sessionStorage.setItem('token', response.data.token);
        // sessionStorage.setItem('username', response.data.name);
        // sessionStorage.setItem('isAuthorized', 'true');

          registerSuccessfulLoginForJwt(response.data.token, response.data.name);
          history.push('/dashboard');
        }
      });
  };
  console.log(isAuth);
  useEffect(() => {
    clusterData.run();
  }, []);
  return <Login handleLogin={handleLogin} errorMessage={errorMessage} />;
}

export default LoginContainer;
