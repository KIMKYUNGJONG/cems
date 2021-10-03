import { Button } from 'antd';
import { UserAddOutlined, ProjectOutlined } from '@ant-design/icons';

function AddButon({ name, type, handleForm }: any) {
  return (
    <Button onClick={() => { handleForm(type); }} type="primary" shape="round" icon={(type === 'user') ? <UserAddOutlined /> : <ProjectOutlined />} size={'large'}>
      {name}
    </Button>
  );
};

export default AddButon;
