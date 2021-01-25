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

    const [scene, setScene] = useState<string|undefined>('scenes/ioe/securebiz/mdf_room 40_10.11.json');
    const [graphValue, setHtValue] = useState<object|undefined>({});
    const handleGraphView: (param: object) => void = function (param) {
        setHtValue(param);
      };
    const handleScene: (param: string) => void = function (param) {
        setScene(param);
      }; 
    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <Navbar changeTheme={changeTheme} handleScene={handleScene}/>
            <DashboardContainer htValue={graphValue} handleGraphView={handleGraphView} scene={scene} />
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
