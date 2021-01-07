import React, { useEffect } from 'react'
// import '../../assets/overlay.scss'
import { Site, SiteInfo } from '../../constant/Dashboard'
// const { kakao } = window

function DashboardMap({ setActiveSite, siteInfo }: { setActiveSite: Function; siteInfo: SiteInfo }) {
    // useEffect(() => {
    //     const mapScript = (data: Site[]) => {
    //         let container = document.getElementById('map')
    //         let options = {
    //             center: new window.kakao.maps.LatLng(37.4801688, 127.0282622),
    //             level: 6,
    //         }

    //         const map = new window.kakao.maps.Map(container, options)

    //         let selectedMarker: any = null
    //         let selectedOverlay: any = null

    //         data.forEach((site: any) => {
    //             var marker = new kakao.maps.Marker({
    //                 map: map,
    //                 position: new kakao.maps.LatLng(site.latitude, site.longitude),
    //             })

    //             var content = `<div class="block"><div class="name">${site.name}</div><button id="${site.id}"><img src="/icons/ic_circle_arrow_right.svg"/></button></div>`
    //             var overlay = new kakao.maps.CustomOverlay({
    //                 content: content,
    //                 position: marker.getPosition(),
    //                 clickable: true,
    //             })

    //             kakao.maps.event.addListener(marker, 'click', function () {
    //                 setActiveSite(null)
    //                 if (!selectedMarker) {
    //                     overlay.setMap(map)
    //                 } else if (selectedMarker !== marker) {
    //                     selectedOverlay.setMap(null)
    //                     overlay.setMap(map)
    //                 }
    //                 selectedMarker = marker
    //                 selectedOverlay = overlay

    //                 document.getElementById(String(site.id))?.addEventListener(
    //                     'click',
    //                     function () {
    //                         document.getElementById(`id-${site.id}`)?.scrollIntoView()
    //                         setActiveSite(`id-${site.id}`)
    //                     }
    //                     // { once: true }
    //                 )
    //             })
    //         })

    //         kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
    //             if (selectedOverlay || selectedMarker) {
    //                 selectedOverlay.setMap(null)
    //                 selectedMarker = null
    //                 selectedOverlay = null
    //                 setActiveSite(null)
    //             }
    //         })

    //         var mapTypeControl = new kakao.maps.MapTypeControl()
    //         map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

    //         var zoomControl = new kakao.maps.ZoomControl()
    //         map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
    //     }

    //     mapScript(siteInfo.data)
    // }, [setActiveSite, siteInfo.data])

    return (
        <iframe
            src='http://13.125.195.34:9901/scene.html?tag=scenes/sngy/%EB%8C%80%EA%B5%AC%EC%95%84%EC%84%B8%EC%95%84%ED%85%8D.json'
            title='dd'
            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%', height: '100%' }}
        ></iframe>
    )
    // return <div id='map' style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%' }} />
}
export default DashboardMap
