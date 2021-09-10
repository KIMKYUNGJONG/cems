import React from 'react'
import styled from 'styled-components'

interface IProps {
    name: string
    color?: string
    small?: boolean
}

function Badge({ name, color, small }: IProps) {
    return (
        <BadgeBlock color={color} small={small}>
            {name}
        </BadgeBlock>
    )
}

const BadgeBlock = styled.div<{ small?: boolean }>`
    display: inline-block;
    font-size: ${(props) => (props.small ? '11px' : '12px')};
    border: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};
    padding: ${(props) => (props.small ? '3px 4px 2px 4px' : '4px 8px 3px 8px')};
    border-radius: 24px;
    margin-bottom: 8px;
    margin-right: 5px;
`
export default Badge
