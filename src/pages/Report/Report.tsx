import React from 'react';
import styled from 'styled-components';
import { Data } from '../../constant/Dashboard';
import ReportList from './ReportList';
import ReportDash from './ReportDash';

function Report(props: { ip: string, data: Data, dummy: Data }) {
  const { data } = props;
  console.log('데이터 호출 :', data);
  const { dummy } = props;

  return (
    <ReportWrapper>
      <ReportList data={dummy} />
      <ReportDash />
    </ReportWrapper>
  );
}
const ReportWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Report;
