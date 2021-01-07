import React, { useState } from 'react'
import styled from 'styled-components'

interface IProps {
    isSearched: boolean
    siteNumber: number
}

function SortDropdown({ isSearched, siteNumber }: IProps) {
    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <DropdownContainer onClick={() => setOpenDropdown(!openDropdown)}>
            <div className="dropdown">
                <span style={{ fontWeight: 'bold' }}>
                    {isSearched ? '검색결과' : '전체'}
                </span>{' '}
                <span className="number">{siteNumber}</span>
                {/* <IconContainer>
                    <Icon name='ic_chevron_down' />
                </IconContainer> */}
            </div>
            {/* <DropdownList opened={openDropdown}>
                <DropdownListItem>전체</DropdownListItem>
                <DropdownListItem>전체</DropdownListItem>
                <DropdownListItem>전체</DropdownListItem>
                <DropdownListItem>전체</DropdownListItem>
                <DropdownListItem>전체</DropdownListItem>
                <DropdownListItem>전체</DropdownListItem>
                <DropdownListItem>전체</DropdownListItem>
            </DropdownList> */}
        </DropdownContainer>
    )
}
const DropdownContainer = styled.div`
    z-index: 3;
    position: relative;
    display: inline-block;
    padding: 5px 0;
    padding-bottom: 9px;
    .dropdown {
        display: inline-block;
        font-size: 15px;
        cursor: pointer;
        padding-right: 24px;
        .number {
            color: #55b1ff;
        }
    }
`
const IconContainer = styled.div`
    position: absolute;
    top: 0px;
    right: -6px;
    width: 25px;
    height: 25px;
`
const DropdownList = styled.div<{ opened: boolean }>`
    display: ${(props) => (props.opened ? 'block' : 'none')};
    position: absolute;
    top: 27px;
    left: 0;
    width: 218px;
    max-height: 240px;
    border-radius: 4px;
    overflow-y: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08),
        0px 4px 24px rgba(0, 0, 0, 0.08);

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #9c9c9c;
        border-radius: 20px;
        // border: 3px solid transparent;
    }
`

const DropdownListItem = styled.div`
    padding: 16px;
    font-size: 14px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
        color: #55b1ff;
        font-weight: bold;
    }
`
export default SortDropdown
