import { Switch } from 'antd'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

function NavbarBottom({
    changeTheme,
}: {
    changeTheme: (checked: boolean) => void
}) {
    return (
        <>
            <SwitchBlock>
                Dark Mode
                <Switch
                    style={{ width: 48, marginTop: 5 }}
                    onChange={changeTheme}
                />
            </SwitchBlock>
            <LogoImg src={logo} />
        </>
    )
}

const SwitchBlock = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.44px;
`
const LogoImg = styled.img`
    width: 48px;
    height: 48px;
    margin-top: 19px;
    cursor: pointer;
`

export default NavbarBottom
