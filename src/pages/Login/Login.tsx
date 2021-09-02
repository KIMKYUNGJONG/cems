import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <LoginWrapper>
      <h1>로그인 페이지</h1>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export default Login;
