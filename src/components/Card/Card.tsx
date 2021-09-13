import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Switch, Card as CardFrame } from 'antd';
import styled from 'styled-components';

interface IProps {
  data: {
    code: string;
    name: string;
    coords: string[];
    regDate: string;
  },
  loading?: boolean
}
const Card = ({ data, loading }: IProps) => {
  return (
    <CardBlock>
      <CardFrame loading={loading} style={{ borderRadius: '10px' }}>
        <p><label>project code</label>{data.code}</p>
        <p><label>project name</label> {data.name}</p>
        <p><label>Longitude, Latitude</label> {data.coords}</p>
        <p><label>Register Date</label> {data.regDate}</p>
        <Skeleton loading={loading} active />
      </CardFrame>
    </CardBlock >
  );
};
const CardBlock = styled.div`
    color: ${(props) => props.theme.fontColor};

    & .ant-card {
      border-radius: 10px;
      border-color:${(props) => props.theme.clusterBg};
      background-color: ${(props) => props.theme.clusterBg};
    }
    & .ant-card-body {
      height: 300px;
      padding: 10px;
      color: ${(props) => props.theme.fontColor};

      & p {
        margin-bottom: 8px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & label {
          font-size: 18px;
          font-weight: bold;
          color: ${(props) => props.theme.iconColor};
          margin-bottom: 5px;
        }
      }
    }

`;

export default Card;