import React from 'react'
import styled from 'styled-components'
import { Site } from '../../../constant/Dashboard'
import Icon from '../../Common/Icon'

interface IProps {
    isFocus: boolean
    setIsFocus: Function
    setValue: Function
    value: string
    filteredSiteData: Site[]
    setFilteredSiteData: Function
    setSiteList: Function
    setIsSearched: Function
}
function SearchResult({
    isFocus,
    setIsFocus,
    value,
    setValue,
    filteredSiteData,
    setFilteredSiteData,
    setSiteList,
    setIsSearched,
}: IProps) {
    const onClickResult = (siteItem: Site) => {
        setValue(siteItem.name)
        setSiteList([siteItem])
        setFilteredSiteData([siteItem])
        setIsFocus(false)
        setIsSearched(true)
    }

    const foldSearchSuggestion = () => {
        setIsFocus(false)
    }

    const changeColorByValue = (name: string) => {
        const positionStart = name.indexOf(value)
        const positionEnd = positionStart + value.length - 1
        let result = ''
        if (value !== '') {
            for (let i = 0; i < name.length; i++) {
                if (i === positionStart && positionStart !== -1) {
                    result += `<span>`
                }
                result += name[i]

                if (i === positionEnd && positionStart !== -1) {
                    result += `</span>`
                }
            }
        } else {
            result = name
        }

        return result
    }

    return (
        <SearchSuggestion id='search_suggestion' opened={isFocus}>
            <SearchResultContainer>
                {filteredSiteData.map((data) => (
                    <SearchResultItem key={data.id} onClick={() => onClickResult(data)}>
                        <IconContainer>
                            <Icon name='ic_search' size='16px' />
                        </IconContainer>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: changeColorByValue(data.name),
                            }}
                        ></div>
                    </SearchResultItem>
                ))}
            </SearchResultContainer>
            <SearchFooter>
                <SearchCloseIconContainer onClick={foldSearchSuggestion}>
                    접기 <Icon name='ic_chevron_up' />
                </SearchCloseIconContainer>
            </SearchFooter>
        </SearchSuggestion>
    )
}
const SearchSuggestion = styled.div<{ opened: boolean }>`
    position: absolute;
    left: 0;
    top: 46px;
    width: 100%;
    max-height: ${(props) => (props.opened ? '407px' : '0')};
    /* border-radius: 6px; */
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    font-size: 14px;
    // margin-top: -10px;
    background-color: ${(props) => props.theme.searchbarFocusBg};
    font-family: 'Noto Sans KR';
    align-items: center;
    letter-spacing: -1px;
    overflow-y: hidden;
    // filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.15));
    z-index: 4;
    padding-top: 0px;
    transition: all 0.3s ease-in-out;
    border: ${(props) => (props.opened ? '2px solid #e5e5e5;' : '0px')};
    border-top: ${(props) => (props.opened ? `1px solid ${props.theme.searchbarDivider};` : '0px')};
`
const TagContainer = styled.div`
    display: flex;
    margin: 16px 0 8px 0;
    padding: 0 16px;
`

const SearchResultContainer = styled.div`
    overflow-y: auto;
    max-height: 303px;
    padding: 4px 0px 16px 0px;
    &::-webkit-scrollbar {
        width: 15px;
    }

    &::-webkit-scrollbar-track {
        background: white;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(156, 156, 156, 0.3);
        border-radius: 20px;
        border: 5px solid white;
    }
`

const SearchResultItem = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 12px;
    // border: 1px solid black;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: rgba(85, 177, 255, 0.1);
    }
    span {
        color: #58b1ff;
    }
`

const IconContainer = styled.div`
    margin-right: 8px;
`

const SearchFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 12px;
    padding: 9px 16px;
    border-top: 1px solid ${(props) => props.theme.searchbarDivider};
    color: #9c9c9c;
    /* cursor: pointer; */
`
const CloseIconBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const SearchCloseIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default SearchResult
