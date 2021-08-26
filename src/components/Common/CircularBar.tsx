import React, { useEffect, useState } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'

interface IProps {
    value: number
    text: string
    path?: string
    trail?: string
}
function CircularBar({ value, text, path, trail }: IProps) {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage(value)
    }, [value])

    return (
        <CircularProgressbarWithChildren
            value={percentage}
            styles={{
                path: {
                    stroke: path || '#55B1FF',
                },
                trail: {
                    stroke: trail || '#2E4A90',
                },
            }}
        >
            <Text>
                <span className='value'>{value}</span>
                <span className='percent'>%</span>
                <br />
                <span className='title'>{text}</span>
            </Text>
        </CircularProgressbarWithChildren>
    )
}

const Text = styled.div`
    align-items: center;
    text-align: center;

    .title {
        font-size: 12px;
        letter-spacing: -2.1px;
    }
    .value {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 16px;
        letter-spacing: -0.4px;
    }
    .percent {
        font-size: 13px;
    }
`
export default CircularBar
