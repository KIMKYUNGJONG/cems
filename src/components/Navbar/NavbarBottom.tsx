import { Switch } from 'antd';
import React from 'react';
import styled from 'styled-components';

function NavbarBottom({
  changeTheme,
}: {
  changeTheme: (checked: boolean) => void
}) {
  return (
    <>
      <UserText>
        <p>안녕하세요. 000님</p>
      </UserText>
      <AvatarImg />

      <SwitchBlock>
        <span>Theme</span>
        <Switch
          style={{ width: 48, marginTop: 5 }}
          onChange={changeTheme}
        />
      </SwitchBlock>

    </>
  );
}

const SwitchBlock = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.44px;
    display: flex;
    flex-direction: column;
    margin-right:10px;
    display:none;
`;
const AvatarImg = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: ${(props) => props.theme.iconUrl};
    background-size: cover;
`;
const UserText = styled.div`
    display: flex;
    
    & p {
      font-size: 14px;
      margin-right: 10px;
    }
`;
export default NavbarBottom;
