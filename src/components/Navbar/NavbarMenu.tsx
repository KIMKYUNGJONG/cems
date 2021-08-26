import React, { useEffect, useRef } from 'react';
import { ROUTES } from '../../constant/routes';
import styled from 'styled-components'
import Icon from '../Common/Icon';

function NavbarMenu(props:any) {
  const onClick = () => {
    //console.log(typeof props.htValue, props.htValue);
    props.handleScene('scenes/ioe/securebiz/server_room 42_10.11.json')
  };
  const routes = ROUTES.map((route) => {
    return (
      <CustomButton key={route.name} onClick={onClick}>
        <Icon name={route.icon} hover={'#f4f6f7'} />
        <span>{route.name}</span>
      </CustomButton>

    );
  });
  return (
  <RouteWrapper>
    {routes}
  </RouteWrapper>);
}
const RouteWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const CustomButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;

  &::after {
    margin-left: 10px;
    content: '|';
  }
`;
export default NavbarMenu;
