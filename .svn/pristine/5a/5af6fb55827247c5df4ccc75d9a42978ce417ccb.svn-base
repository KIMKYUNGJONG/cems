import React from 'react';
import styled from 'styled-components';
import NavbarBottom from './NavbarBottom';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';

function Navbar(props: any) {

  return (
    <NavbarBlock>
      <NavbarSection>
        <NavbarLogo />
      </NavbarSection>
      <NavbarSection>
        {(props.isLogin === 'true') ? <NavbarMenu htValue={props.htValue} handleScene={props.handleScene} {...props} /> : null}
      </NavbarSection>
      <NavbarSection>
        <NavbarBottom changeTheme={props.changeTheme} />
      </NavbarSection>
    </NavbarBlock>
  );
}

const NavbarBlock = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    
    height: 60px;
    background-color: ${(props) => props.theme.headerBg};
    color: ${(props) => props.theme.fontColor};
    border-bottom: 1px solid #eaeaea;
    box-sizing: border-box;
    z-index: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 12px;

`;
const NavbarSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default Navbar;
