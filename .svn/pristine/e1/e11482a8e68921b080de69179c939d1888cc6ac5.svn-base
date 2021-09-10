import React, { useContext, useLayoutEffect, useRef } from 'react'
// import * as am4charts from '@amcharts/amcharts4/charts'
// import * as am4core from '@amcharts/amcharts4/core'
// import am4themes_animated from '@amcharts/amcharts4/themes/animated'
// import { ThemeContext } from 'styled-components'

interface IProps {
    id: string
    type: 'cluster' | 'site'
    monthly_reduction: string
    monthly_succ_bid: string
}
function DrChart({ id, type, monthly_reduction, monthly_succ_bid }: IProps) {
    // const chart = useRef<am4charts.XYChart | null>(null)
    // const chartxAxes = useRef<am4charts.CategoryAxis<am4charts.AxisRenderer> | null>(null)

    // const themeContext = useContext(ThemeContext)

    // am4core.useTheme(am4themes_animated)

    // useLayoutEffect(() => {
    //     let xyChart = am4core.create(id, am4charts.XYChart)

    //     xyChart.data = [
    //         {
    //             category: '감축량',
    //             value: parseInt(monthly_reduction.replace(/\,/g, '')),
    //         },
    //         {
    //             category: '낙찰량',
    //             value: parseInt(monthly_succ_bid.replace(/\,/g, '')),
    //         },
    //     ]

    //     let xAxis = xyChart.xAxes.push(new am4charts.CategoryAxis())
    //     chartxAxes.current = xAxis
    //     let label = xAxis.renderer.labels.template
    //     label.wrap = true
    //     label.maxWidth = 120
    //     xAxis.dataFields.category = 'category'
    //     // xAxis.renderer.labels.template.
    //     xAxis.renderer.inside = true
    //     xAxis.renderer.labels.template.dy = 26
    //     // xAxis.renderer.labels.template.dx = 10

    //     xAxis.renderer.labels.template.fill = am4core.color(type === 'cluster' ? '#fff' : themeContext.fontColor)

    //     // xAxis.renderer.labels.template
    //     xAxis.renderer.minGridDistance = 15

    //     xAxis.renderer.cellStartLocation = 0
    //     // xAxis.renderer.cellEndLocation = 0.7

    //     xAxis.renderer.grid.template.disabled = true
    //     // xAxis.renderer.labels.template.location = 0.0
    //     xAxis.renderer.grid.template.location = 0

    //     // xAxis.renderer.labels.template.disabled = true
    //     xAxis.renderer.labels.template.fontSize = 9
    //     xAxis.cursorTooltipEnabled = false
    //     // xAxis.renderer.labels.template.

    //     let valueAxis = xyChart.yAxes.push(new am4charts.ValueAxis())
    //     // valueAxis.renderer.minGridDistance =
    //     // valueAxis.renderer.labels.template.location = 0.0

    //     // valueAxis.min = 0
    //     valueAxis.renderer.grid.template.disabled = true
    //     // valueAxis.renderer.fill = am4core.color('#55B1FF')
    //     valueAxis.renderer.baseGrid.disabled = true
    //     valueAxis.renderer.labels.template.disabled = true
    //     valueAxis.renderer.labels.template.location = 0
    //     valueAxis.renderer.grid.template.location = 0
    //     valueAxis.cursorTooltipEnabled = false

    //     let series = xyChart.series.push(new am4charts.ColumnSeries())
    //     series.dataFields.categoryX = 'category'
    //     series.dataFields.valueY = 'value'
    //     series.columns.template.tooltipText = '[font-size: 8]{valueY.value}'

    //     series.strokeWidth = 0

    //     series.columns.template.adapter.add('fill', function (fill, target) {
    //         if (target.dataItem) {
    //             if (!target.dataItem.index) {
    //                 return am4core.color('#55B1FF')
    //             } else {
    //                 return xyChart.colors.getIndex(target.dataItem.index)
    //             }
    //         }
    //     })

    //     chart.current = xyChart

    //     return () => {
    //         xyChart.dispose()
    //     }
    // }, [id, monthly_reduction, monthly_succ_bid])

    // useLayoutEffect(() => {
    //     if (chartxAxes.current) {
    //         chartxAxes.current.renderer.labels.template.fill = am4core.color(
    //             type === 'cluster' ? '#fff' : themeContext.fontColor
    //         )
    //     }
    // }, [themeContext.fontColor, type])

    return <div id={id} style={{ width: '100%', height: '100%' }}></div>
}

export default DrChart
