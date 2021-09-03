import React, { useEffect, useRef } from 'react';
import { ROUTES } from '../../constant/routes';
import styled from 'styled-components';
import Icon from '../Common/Icon';
import { matchPath, NavLink } from 'react-router-dom';

function NavbarMenu(props: any) {
  const onClick = () => {
    console.log(props.match);
  };
  const routes = ROUTES.map((route) => {
    return (
      <CustomButton key={route.name}>
        <NavLink
          activeClassName="activated"
          to={`/${route.name}`}
          onClick={onClick} >
          <Icon name={route.icon} hover={'#f4f6f7'} />
          <span>{route.name}</span>
        </NavLink>
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

  & a {
    display: inline-flex;
    align-items: center;
  }

  & a.activated {
    color: #ffbb28;

    & svg path {
      stroke: #ffbb28;
    }
  }

  &::after {
    margin-left: 10px;
    content: '|';
  }
`;
export default NavbarMenu;
