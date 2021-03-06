import React, { useEffect, useState } from 'react';
import { useAsync } from 'react-async';
import { apiGet, ipGet } from '../lib/api';
import Report from '../pages/Report/Report';
import { Data } from '../constant/Dashboard';

/**
 * 외부 api 호출
 */
const fetchClusterData = async () => {
  const res = await apiGet({
    url: 'https://gorest.co.in/public-api/comments',
  });
  return res.data;
};

function ReportContainer(props: any) {
  /**
   * 외부api useAsync
   */
  const clusterData = useAsync({
    deferFn: fetchClusterData,
    initialValue: [],
  });

  /**
 * 차트 api 호출
 */
  const [lineData, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json') // 더미데이터
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  /**
   * 백단 테스트용 api 입니다
   * api 정의 파일은 lib/api.ts에 있습니다.
   */
  const [ip, setIp] = useState('');
  function callback(data: any) {
    setIp(data);
  }
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      ipGet('/ip', callback);
    }, [ip]
  );
  // demo api 끝단


  const data: Data =
  {
    project: 'PJ_0917',
    aplicationId: '11',
    coords: ['10.15151', '10.15151'],
    regDate: '2021-08-30',
    userId: 'sma_01',
    sms: ['010-666-6666', '010-555-5555'],
    note: 'sample demo'
  };

  useEffect(() => {
    clusterData.run();
  }, []);

  return <Report ip={ip} dummy={data} data={clusterData.data.data} lineData={lineData} />;
}

export default ReportContainer;
