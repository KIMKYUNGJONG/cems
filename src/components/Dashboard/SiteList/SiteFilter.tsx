import React, { ReactNode, useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Site } from '../../../constant/Dashboard'
import Icon from '../../Common/Icon'
interface IProps {
    allCardOpened: boolean
    setAllCardOpened: Function
    filterType: string
    setFilterType: Function
}

function SiteFilter({ allCardOpened, setAllCardOpened, filterType, setFilterType }: IProps) {
    const themeContext = useContext(ThemeContext)

    const onOpenAllCard = () => {
        setAllCardOpened((opened: boolean) => !opened)
    }

    const onClickFilterButton = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setFilterType(event.currentTarget.id)
    }

    return (
        <FilterBlock>
            <RadioButton name='sortType' id='all' onClick={onClickFilterButton}>
                All
            </RadioButton>
            <RadioButton name='sortType' id='pv' onClick={onClickFilterButton}>
                PV
            </RadioButton>
            <RadioButton name='sortType' id='ess' onClick={onClickFilterButton}>
                ESS
            </RadioButton>
            <RadioButton name='sortType' id='dr' onClick={onClickFilterButton}>
                DR
            </RadioButton>
            <OpenCardBtn onClick={onOpenAllCard} opened={allCardOpened} />
        </FilterBlock>
    )
}

function RadioButton({
    name,
    id,
    onClick,
    children,
}: {
    name: string
    id: string
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    children: ReactNode
}) {
    return (
        <RadioWrapper>
            <RadioInput id={id} name={name} type='radio' onClick={onClick} defaultChecked={id === 'all'} />
            <Label htmlFor={id}>{children}</Label>
        </RadioWrapper>
    )
}

const FilterBlock = styled.div`
    display: flex;
    align-items: center;
`

const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Label = styled.label`
    cursor: pointer;
    font-size: 11px;
    padding: 5px 0;
    width: 50px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.radioBtnBorder};
    border-radius: 24px;
    color: ${(props) => props.theme.radioBtnText};
    background-color: ${(props) => props.theme.radioBtnBg};
    margin-right: 12px;
    &:hover {
        border: 1px solid ${(props) => props.theme.siteFilterCheckedBorder};
        color: ${(props) => props.theme.radioBtnTextChecked};
        background-color: ${(props) => props.theme.radioBtnBgChecked};
    }
`

const RadioInput = styled.input`
    display: none;
    &:checked + ${Label} {
        color: ${(props) => props.theme.radioBtnTextChecked};
        border: 1px solid ${(props) => props.theme.siteFilterCheckedBorder};
        background-color: ${(props) => props.theme.radioBtnBgChecked};
    }
`
const OpenCardBtn = styled.button<{ opened: boolean }>`
    // display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px 0 0 8px;
    background: ${(props) => (props.opened ? props.theme.closeAllBtn : props.theme.openAllBtn)};
    background-size: 22px 22px;
    width: 24px;
    height: 24px;
    &:hover {
        background: ${(props) => (props.opened ? props.theme.closeAllBtnHover : props.theme.openAllBtnHover)};
        background-size: 22px 22px;
    }
`
export default SiteFilter
