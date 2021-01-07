import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Icon from '../../Common/Icon'

interface IProps {
    listOpened: boolean
    setListOpen: Function
}

function ToggleButton({ listOpened, setListOpen }: IProps) {
    const themeContext = useContext(ThemeContext)

    return (
        <ToggleBtn onClick={() => setListOpen(!listOpened)}>
            <ToggleDiv opened={listOpened}>
                <div style={{ position: 'absolute', right: 12, top: 13 }}>
                    <Icon name='ic_list_toggle' size='24px' fill={themeContext.toggleBtnIcon} />
                </div>
            </ToggleDiv>
        </ToggleBtn>
    )
}

const ToggleBtn = styled.button`
    z-index: 4;
    position: absolute;
    top: 256px;
    right: -30px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
`

const ToggleDiv = styled.div<{ opened: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    /* top: 15px; */
    width: 50px;
    height: 50px;
    transform: ${(props) => (props.opened ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => props.theme.toggleBtnBg};
    border-radius: 50%;
`
export default ToggleButton
