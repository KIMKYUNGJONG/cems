import { Empty } from 'antd'
import Spin from 'antd/lib/spin'
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import SearchBar from '../../components/Dashboard/SiteList/SearchBar'
import SiteCard from '../../components/Dashboard/SiteList/SiteCard'
import SiteFilter from '../../components/Dashboard/SiteList/SiteFilter'
import SortDropdown from '../../components/Dashboard/SiteList/SortDropdown'
import ToggleButton from '../../components/Dashboard/SiteList/ToggleButton'
import { Data, Site, SiteData, SiteInfo } from '../../constant/Dashboard'

function DashboardSiteList({
    activeSite,
    siteInfo,
    siteData,
}: {
    activeSite: string | null
    siteInfo: SiteInfo
    siteData: SiteData
}) {
    const [listOpened, setListOpen] = useState(false)
    const [allCardOpened, setAllCardOpened] = useState(false)
    const [siteList, setSiteList] = useState<Site[]>([])
    const [isSearched, setIsSearched] = useState(false)
    const [filterType, setFilterType] = useState('all')

    useEffect(() => {
        if (siteInfo.data) {
            setSiteList(JSON.parse(JSON.stringify(siteInfo.data)))
        }
    }, [siteInfo.data])

    const finalSiteList = siteData.data
        .filter((siteData: Data) => {
            return (
                siteList
                    .filter((site: Site) => {
                        if (filterType === 'all') {
                            return site
                        } else {
                            return site[`is_${filterType}`]
                        }
                    })
                    .map((site: Site) => site.name)
                    .indexOf(siteData.name) !== -1
            )
        })
        .map((site: Data) => {
            return (
                <SiteCard
                    active={activeSite === `id-${site.id}`}
                    id={`id-${site.id}`}
                    key={site.id}
                    title={site.name}
                    current={site.energy}
                    ess={site.ess}
                    pv={site.pv}
                    dr={site.dr}
                    allCardOpened={allCardOpened}
                />
            )
        })

    if (siteInfo.isLoading || siteData.isLoading) {
        return (
            <SiteListBlock opened={listOpened}>
                <SpinBox>
                    <Spin size='large' style={{ position: 'relative', left: 15 }} tip='Loading...' />
                </SpinBox>
            </SiteListBlock>
        )
    }

    // if (error || siteData.error) {
    //     return (
    //         <SiteListBlock opened={listOpened}>
    //             <SpinBox>
    //                 <Spin size='large' style={{ position: 'relative', left: 15 }} tip='Loading...' />
    //             </SpinBox>
    //         </SiteListBlock>
    //     )
    // }

    if (siteInfo.data && siteData.data) {
        return (
            <SiteListBlock opened={listOpened}>
                <ToggleButton listOpened={listOpened} setListOpen={setListOpen} />

                <SearchBar
                    siteInfoOrigin={siteInfo.data}
                    siteInfoFiltered={siteList}
                    setSiteInfo={setSiteList}
                    isSearched={isSearched}
                    setIsSearched={setIsSearched}
                />

                <HeaderBlock>
                    <SortDropdown isSearched={isSearched} siteNumber={siteList.length} />
                    <SiteFilter
                        allCardOpened={allCardOpened}
                        setAllCardOpened={setAllCardOpened}
                        filterType={filterType}
                        setFilterType={setFilterType}
                    />
                </HeaderBlock>
                <ContentBlock id='site-list'>
                    <Masonry
                        breakpointCols={listOpened ? 2 : 1}
                        className='my-masonry-grid'
                        columnClassName='my-masonry-grid_column'
                    >
                        {finalSiteList.length ? finalSiteList : <Empty />}
                    </Masonry>
                </ContentBlock>
            </SiteListBlock>
        )
    }

    return null
}

const SiteListBlock = styled.div<{ opened: boolean }>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 307px;
    width: ${(props) => (props.opened ? '680px' : '370px')};
    height: 100%;
    background-color: ${(props) => props.theme.siteListBg};
    color: ${(props) => props.theme.fontColor};
    padding: 34px 34px 16px 52px;
    border-top-right-radius: 20px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    z-index: 2;
`
const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    margin-top: 16px;
`
const ContentBlock = styled.div`
    display: grid;

    .my-masonry-grid {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-left: -30px; /* gutter size offset */
        width: auto;
    }

    .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }

    margin-top: 25px;
    overflow-y: auto;
    height: calc(100% - 145px) !important;
    &::-webkit-scrollbar {
        width: 0;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`
const SpinBox = styled.div`
    position: absolute;
    top: 40%;
    left: 40%;
`
export default DashboardSiteList
