import React from 'react';
import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

interface IProps {
  name: string
  stroke?: string
  size?: string
  fill?: string
  transform?: string
  hover?: string
  hoverfill?: string
}

function Icon({ name, stroke, size, transform, hover, fill, hoverfill }: IProps) {
  return (
    <StyledSVGIcon
      src={`/icons/${name}.svg`}
      stroke={stroke}
      size={size}
      transform={transform}
      hover={hover}
      fill={fill}
      hoverfill={hoverfill}
    />
  );
}

const StyledSVGIcon = styled(ReactSVG) <{
  size?: string
  transform?: string
  stroke?: string
  hover?: string
  fill?: string
  hoverfill?: string
}>`
    svg {
        fill: transparent;

        & path {
            stroke: ${(props) => props.theme.iconColor};
        }

        &:hover {
            path {
                stroke: ${(props) => props.theme.iconHover};
            }
        }

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

            ${({ fill }) =>
    fill &&
    css`
                    fill: ${fill};
                `}
        }
    }
`;

export default Icon;
