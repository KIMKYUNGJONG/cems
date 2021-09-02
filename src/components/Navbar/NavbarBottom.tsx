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
                <span>Theme</span>
                <Switch
                    style={{ width: 48, marginTop: 5 }}
                    onChange={changeTheme}
                />
            </SwitchBlock>
            <LogoImg />
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
    display: flex;
    flex-direction: column;
    margin-right:10px;
`
const LogoImg = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: ${(props)=>props.theme.iconUrl};
    background-size: cover;
`

export default NavbarBottom
