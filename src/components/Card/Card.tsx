import React from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Card as CardFrame } from 'antd';
import styled from 'styled-components';
import { Data } from '../../constant/Dashboard';

const Card = ({ data, loading }: { data: Data, loading: boolean }) => {
  return (
    <CardBlock>
      <CardFrame loading={loading} style={{ borderRadius: '10px' }}>
        <p>
          <span><label>프로젝트명</label>{data.project}</span>
          <span><label>Aplication ID</label>{data.aplicationId}</span>
        </p>
        <p><span><label>사용자 ID</label> {data.userId}</span></p>
        <p><span><label>생성일</label>{data.regDate}</span></p>
        <FlexBlock>
          <p><label>위치</label><p>위도:{data.coords[0]}</p><p>경도:{data.coords[1]}</p></p>
          <p><label>SMS 번호</label>{data.sms ? data.sms.map((num) => <p key={num}>{num}</p>) : null}</p>
        </FlexBlock>

        <p><label>note</label><span>{data.note}</span></p>
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
      padding: 10px;
      color: ${(props) => props.theme.fontColor};

      & p {
        margin-bottom: 8px;
        padding: 0 8px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        & span {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: space-between;
        }
        & label {
          font-size: 18px;
          font-weight: bold;
          color: ${(props) => props.theme.iconColor};
          margin-bottom: 5px;
        }
      }
    }

`;
const FlexBlock = styled.div`
  display: inline-flex;
  border-top: 1px solid #eeeeee;
  padding-top: 10px;
`;

export default Card;