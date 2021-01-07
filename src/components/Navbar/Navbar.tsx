import React from 'react'
import styled from 'styled-components'
import NavbarBottom from './NavbarBottom'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'

function Navbar({ changeTheme }: { changeTheme: (checked: boolean) => void }) {
    return (
        <NavbarBlock>
            <NavbarSection>
                <NavbarLogo />
                <NavbarMenu />
            </NavbarSection>
            <NavbarSection>
                <NavbarBottom changeTheme={changeTheme} />
            </NavbarSection>
        </NavbarBlock>
    )
}

const NavbarBlock = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 72px;

    height: 100%;
    background-color: #0e3aad;
    color: white;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px 12px;
`
const NavbarSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Navbar
