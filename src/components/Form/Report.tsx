import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Form, Button, Select, Radio, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

const dummySelect: any[] = [];
for (let i = 10; i < 36; i++) {
  dummySelect.push(<Option key={i.toString(36) + i} value={`PJ_${i}`} >{i.toString(36) + i}</Option>);
}

const ReportForm = (props: any) => {
  const [form] = Form.useForm();
  const [decade, setDecade] = useState();
  const { formRef, user, modVisible } = props;
  const onFinish = (values: any) => {
    console.log('Success:', values);
    const data = {
      id: values.id,
      password: values.password,
      company: values.company,
      manager: values.manager,
      contact: values.contact,
      email: values.email,
      project: values.project,
      note: values.note
    };
    console.log('백단 통신 필요: update api');
    console.log(props);
    formRef.current!.resetFields();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleSelectChange = (value: any) => {
    console.log(`Selected: ${value}`);
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
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
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
        </Row>
        <Row>
          <Form.Item
            label={'조회조건'}
            name="decade"
          >
            <Radio.Group style={{ width: '400px' }} onChange={(event) => { setDecade(event.target.value); }}>
              <Radio value="day">일별</Radio>
              <Radio value="week">주별</Radio>
              <Radio value="month">월별</Radio>
              <Radio value="year">년별</Radio>
            </Radio.Group>
          </Form.Item>
          ${
            switch (decade) {
              case 'day':

          return
          <Form.Item
            label={'직접입력'}
            name="select_decade"
          >
            <RangePicker
              dateRender={current => {
                const style = { border: '', borderRadius: '' };
                if (current.date() === 1) {
                  style.border = '1px solid #1890ff';
                  style.borderRadius = '50%';
                }
                return (
                  <div className="ant-picker-cell-inner" style={style}>
                    {current.date()}
                  </div>
                );
              }}
            />
          </Form.Item>;

          default:
          break;
            }
          }

          <CustomButtonGroup>
            <CustomButton>
              <Button type="primary" htmlType="submit">
                조회
              </Button>
            </CustomButton>
          </CustomButtonGroup>
        </Row>
      </Form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.clusterBg};
  border-radius: 15px;
  & label {
    color: ${(props) => props.theme.fontColor};
  }
`;
const CustomButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 0 auto;
`;

const CustomButton = styled.div`
  width: 70px;
  & button {
    width:100%;
  }
`;

export default ReportForm;