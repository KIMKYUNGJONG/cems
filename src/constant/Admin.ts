export const dataSource = [
  [
    {
      key: '1',
      id: 'User1',
      company: 'COM1',
      manager: 'Admin1',
      contact: '010-0000-0000',
      email: 'google@google.com',
      project: ['PJ_01', 'PJ_02'],
    },
    {
      key: '2',
      id: 'User2',
      company: 'COM2',
      manager: 'Admin2',
      contact: '010-0000-0000',
      email: 'google@google.com',
      project: ['PJ_01', 'PJ_02'],
    },
    {
      key: '3',
      id: 'User3',
      company: 'COM3',
      manager: 'Admin3',
      contact: '010-0000-0000',
      email: 'google@google.com',
      project: ['PJ_01', 'PJ_02'],
    }
  ],
  [
    {
      key: '1',
      projectName: 'PJ_01',
      scene: 'PJ_01',
      aplicationId: '10',
      sms: ['010-0000-0000', '010-1111-1111'],
      regDate: '2021-09-09 16:48',
      url: '/ht-static/scenes/PJ_01/PJ_01.json',
      userId: 'User_01',
      projectId: '35',
      note: 'blabla'
    },
    {
      key: '2',
      projectName: 'PJ_02',
      scene: 'PJ_02',
      aplicationId: '11',
      sms: ['010-0000-0000', '010-1111-1111'],
      regDate: '2021-09-09 16:48',
      url: '/ht-static/scenes/PJ_02/PJ_02.json',
      userId: 'User_02',
      projectId: '37',
      note: 'blabla'
    },
    {
      key: '3',
      projectName: 'PJ_03',
      scene: 'PJ_03',
      aplicationId: '12',
      sms: ['010-0000-0000', '010-1111-1111'],
      regDate: '2021-09-09 16:48',
      url: '/ht-static/scenes/PJ_03/PJ_03.json',
      userId: 'User_03',
      projectId: '39',
      note: 'blabla'
    },
  ]
];

export const sensorData = [
  {
    projectName: '새만금 프로젝트',
    asset: [
      {
        node_id: 'ST_1451',
        adc1_type: '지진계',
        adc1_name: 'W-1',
        adc2_type: '구조물경사계',
        adc2_name: 'W-2',
        adc3_type: 'N/A',
        adc3_name: '',
        adc4_type: 'N/A',
        adc4_name: '',
        adcDiff12_type: 'N/A',
        adcDiff12_name: '',
        adcDiff34_type: 'N/A',
        adcDiff34_name: '',
      }
    ]
  },
  {
    projectName: '새만금 프로젝트2',
    asset: [
      {
        node_id: 'ST_1452',
        adc1_type: '지진계',
        adc1_name: 'W-1',
        adc2_type: '구조물경사계',
        adc2_name: 'W-2',
        adc3_type: 'N/A',
        adc3_name: '',
        adc4_type: 'N/A',
        adc4_name: '',
        adcDiff12_type: 'N/A',
        adcDiff12_name: '',
        adcDiff34_type: 'N/A',
        adcDiff34_name: '',
      }
    ]
  }
]