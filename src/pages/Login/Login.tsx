import React from 'react';
import styled from 'styled-components';

import LoginForm from './LoginForm';

function Login(props: any) {
  return (
    <LoginWrapper>
      <LoginForm {...props} />
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Login;
