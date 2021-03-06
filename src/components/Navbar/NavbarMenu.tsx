import React from 'react';
import { ROUTES } from '../../constant/routes';
import styled from 'styled-components';
import Icon from '../Common/Icon';
import { NavLink } from 'react-router-dom';

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
      {(props.isAdmin === 'true') ?
        <CustomButton key={'admin'}>
          <NavLink
            activeClassName="activated"
            to={'/admin'}
            onClick={onClick} >
            <Icon name={'ic_nav4'} hover={'#f4f6f7'} />
            <span>admin</span>
          </NavLink>
        </CustomButton>
        : null
      }
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
    color: ${(props) => props.theme.fontColor};
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

  &:last-child {
    & svg path {
      stroke-width: 1.5px;
    }
  }

  &:last-child::after {
    margin-left: 10px;
    content: '';
  }
`;
export default NavbarMenu;
