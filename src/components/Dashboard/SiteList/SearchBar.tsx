import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Site, SiteData } from '../../../constant/Dashboard'
import Icon from '../../Common/Icon'
import SearchResult from './SearchResult'

interface IProps {
    siteInfoOrigin: Site[]
    siteInfoFiltered: Site[]
    setSiteInfo: Function
    isSearched: boolean
    setIsSearched: Function
}
function SearchBar({ siteInfoOrigin, siteInfoFiltered, setSiteInfo, setIsSearched, isSearched }: IProps) {
    const [filteredSiteData, setFilteredSiteData] = useState(siteInfoOrigin)

    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState('')

    const searchContainer = useRef<HTMLDivElement | null>(null)

    const filterSiteByName = (keyword: string) => {
        let filteredByName = siteInfoOrigin.filter(function (item) {
            return (
                item.name
                    .replace(/[&\\#,+()$~%.'":*?<>{}]/g, '_')
                    .toLowerCase()
                    .search(keyword.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '_').toLowerCase()) !== -1
            )
        })
        setFilteredSiteData(filteredByName)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (value.length === 0) setIsSearched(false)
            else setIsSearched(true)
            setSiteInfo(filteredSiteData)
            setIsFocused(false)
        }
    }

    const onClickOutSide = (event: any) => {
        if (searchContainer.current && !searchContainer.current.contains(event.target)) {
            setIsFocused(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClickOutSide, true)
        return () => {
            document.removeEventListener('click', onClickOutSide, true)
        }
    })

    return (
        <div>
            <SearchContainer ref={searchContainer}>
                <SearchInputContainer isFocused={isFocused}>
                    <input
                        type='text'
                        placeholder='회사명을 입력해 주세요'
                        onFocus={() => {
                            setIsFocused(true)
                        }}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                            filterSiteByName(e.target.value)
                        }}
                        onKeyDown={handleKeyPress}
                    />
                    <SearchIconContainer>
                        <Icon name='ic_search' size='24px' />
                    </SearchIconContainer>
                    <CloseIconContainer
                        open={isFocused || isSearched}
                        onClick={() => {
                            setIsFocused(false)
                            setValue('')
                            setFilteredSiteData(siteInfoOrigin)
                            setSiteInfo(siteInfoOrigin)
                            setIsSearched(false)
                        }}
                    >
                        <div style={{ paddingTop: 4 }}>
                            <Icon name='ic_close' hover={'#868383'} />
                        </div>
                    </CloseIconContainer>
                </SearchInputContainer>
                {Boolean(filteredSiteData.length) && (
                    <SearchResult
                        isFocus={isFocused}
                        setIsFocus={setIsFocused}
                        value={value}
                        setValue={setValue}
                        filteredSiteData={filteredSiteData}
                        setFilteredSiteData={setFilteredSiteData}
                        setSiteList={setSiteInfo}
                        setIsSearched={setIsSearched}
                    />
                )}
            </SearchContainer>
        </div>
    )
}
const SearchContainer = styled.div`
    position: relative;
`

const SearchInputContainer = styled.div<{ isFocused: boolean }>`
    position: relative;
    z-index: 5;
    input {
        outline: none;
        font-size: 15px;
        padding: 11px 45px 11px 50px;
        width: 100%;
        background-color: ${(props) => props.theme.searchbarBg};
        border-radius: 10px;
        border: 2px solid ${(props) => props.theme.searchbarBg};
        border-bottom: none;
        letter-spacing: -1px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        font-family: 'Noto Sans KR';

        ${(props) =>
            props.isFocused &&
            css`
                background-color: ${(props) => props.theme.searchbarFocusBg};
                border-top: 2px solid #55b1ff;
                border-left: 2px solid #55b1ff;
                border-right: 2px solid #55b1ff;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            `};
    }
`
const SearchIconContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 17px;
`

const CloseIconContainer = styled.div<{ open: boolean }>`
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 17px;
    cursor: pointer;
`

export default SearchBar
