import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { reset } from 'styled-reset'

import Navbar from '../components/Navbar/Navbar'
import { DarkTheme, LightTheme } from '../constant/theme'
import DashboardContainer from '../containers/DashboardContainer'

const Layout = () => {
    const [theme, setTheme] = useState<Theme>('light')
    const themes = {
        light: LightTheme,
        dark: DarkTheme,
    }
    type Theme = keyof typeof themes

    const changeTheme = (checked: boolean) => {
        if (checked) setTheme('dark')
        if (!checked) setTheme('light')
    }

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <Navbar changeTheme={changeTheme} />
            <DashboardContainer />
        </ThemeProvider>
    )
}
const GlobalStyle = createGlobalStyle`
  ${reset}
  
    body {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        font-family: 'NanumSquare', 'Roboto', sans-serif;
        background-color: gainsboro;

    }
    button {
        appearance: none;
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
    }
`
export default Layout
