import React from 'react'
import { ReactSVG } from 'react-svg'
import styled, { css } from 'styled-components'

interface IProps {
    name: string
    stroke?: string
    size?: string
    fill?: string
    transform?: string
    hover?: string
    hoverFill?: string
}

function Icon({ name, stroke, size, transform, hover, fill, hoverFill }: IProps) {
    return (
        <StyledSVGIcon
            src={`/icons/${name}.svg`}
            stroke={stroke}
            size={size}
            transform={transform}
            hover={hover}
            fill={fill}
            hoverFill={hoverFill}
        />
    )
}

const StyledSVGIcon = styled(ReactSVG)<{
    size?: string
    transform?: string
    stroke?: string
    hover?: string
    fill?: string
    hoverFill?: string
}>`
    svg {
        fill: transparent;
        ${({ size }) =>
            size &&
            css`
                width: ${size};
                height: ${size};
            `}
        ${({ transform }) =>
            transform &&
            css`
                transform: ${transform};
            `}
    
    path {
            ${({ stroke }) =>
                stroke &&
                css`
                    stroke: ${stroke};
                `}

            ${({ fill }) =>
                fill &&
                css`
                    fill: ${fill};
                `}
        }

        &:hover {
            path {
                ${({ hover }) =>
                    hover &&
                    css`
                        stroke: ${hover};
                    `}
                ${({ hoverFill }) =>
                    hoverFill &&
                    css`
                        fill: ${hoverFill};
                    `}
            }
        }
    }
`

export default Icon
