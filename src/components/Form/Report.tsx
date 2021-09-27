/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Form, Button, Select, Radio, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

const dummySelect: any[] = [];
for (let i = 10; i < 36; i++) {
  dummySelect.push(<Option key={i.toString(36) + i} value={`PJ_${i}`} >{i.toString(36) + i}</Option>);
}

function PickerWithType({ type, onChange }: any) {
  if (type === 'date') return <DatePicker picker="date" onChange={onChange} />;
  if (type === 'month') return <DatePicker picker="month" onChange={onChange} />;
  if (type === 'year') return <DatePicker picker="year" onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

const ReportForm = (props: any) => {
  const [form] = Form.useForm();
  const [type, setType] = useState('date');
  const [disable, setCustomDecade] = useState(true);
  const { formRef, user, modVisible } = props;
  const onFinish = (values: any) => {
    const data = {
      section: values.section,
      sensorType: values.sensorType,
      sensorName: values.sensorName,
      decade: values.decade,
      selectDecade: disable ? values.select_decade._d : [values.select_range[0]._d, values.select_range[1]._d]
    };
    props.handleFormValue(data);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleSelectChange = (value: any) => {
    console.log(`Selected: ${value}`);
  };
  const toggleDecade = () => {
    setCustomDecade(!disable);
  };
  useEffect(() => {
    form.setFieldsValue(user);
  }, [form, user]);
  return (
    <StyledForm>
      <Form
        ref={formRef}
        form={form}
        layout={'inline'}
        name="user"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FlexRow>
          <Form.Item
            label={'공사구간'}
            name="section"
          >
            <Select
              mode="multiple"
              size={'middle'}
              placeholder="Please select"
              onChange={handleSelectChange}
              style={{ width: '200px' }}
            >
              {dummySelect}
            </Select>
          </Form.Item>
          <Form.Item
            label={'센서종류'}
            name="sensorType"
          >
            <Select
              mode="multiple"
              size={'middle'}
              placeholder="Please select"
              onChange={handleSelectChange}
              style={{ width: '200px' }}

            >
              {dummySelect}
            </Select>
          </Form.Item>
          <Form.Item
            label={'센서명'}
            name="sensorName"
          >
            <Select
              mode="multiple"
              size={'middle'}
              placeholder="Please select"
              onChange={handleSelectChange}
              style={{ width: '200px' }}
            >
              {dummySelect}
            </Select>
          </Form.Item>
        </FlexRow>
        <FlexRow>
          <Form.Item
            label={'조회조건'}
            name="decade"
          >
            <Radio.Group value={type} onChange={(e) => setType(e.target.value)}>
              <Radio value="date">일별</Radio>
              <Radio value="week">주별</Radio>
              <Radio value="month">월별</Radio>
              <Radio value="year">년별</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={'기간'}
            name="select_decade"
          >
            <PickerWithType type={type} onChange={(value: any) => console.log(value)} />
          </Form.Item>

          <Button type="primary" onClick={toggleDecade}>직접 선택</Button>
          <Form.Item
            name="select_range"
          >
            <RangePicker style={{ width: 300 }} format={'YYYY/MM/DD'} disabled={disable} />
          </Form.Item>

          <CustomButtonGroup>
            <CustomButton>
              <Button type="primary" htmlType="submit">
                조회
              </Button>
            </CustomButton>
          </CustomButtonGroup>
        </FlexRow>
      </Form>
    </StyledForm >
  );
};

const StyledForm = styled.div`
  padding: 10px;
  margin: .4rem 0;
  width: 100%;
  background-color: #eaeaea;
  border-radius: 15px;
  & .ant-form-item-label label {
    color: ${(props) => props.theme.fontColor};
    width: 80px;
    justify-content: flex-end;
  }
`;
const CustomButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 250px;
`;

const CustomButton = styled.div`
  width: 70px;
  & button {
    width:100%;
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: .3rem;
`;
export default ReportForm;