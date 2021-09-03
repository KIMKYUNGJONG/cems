import React from 'react';
import styled from 'styled-components';

function Report() {
  console.log('report');
  return (
    <ReportWrapper>
      <h1>레포트 페이지</h1>
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
