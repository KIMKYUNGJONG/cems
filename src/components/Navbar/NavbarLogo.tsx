import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/sun-energy.svg';

function NavbarLogo() {
  return (
    <>
      <ProjectLogo src={logo} />
      <ProjectText>CEMS</ProjectText>
    </>
  );
}

const ProjectLogo = styled.img`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: #55b1ff;
    padding: 10px;
    margin-bottom: 5px;
`;
const ProjectText = styled.p`
    letter-spacing: 0.15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    margin-left: 10px;
    font-family: 'Roboto';
`;

export default NavbarLogo;
