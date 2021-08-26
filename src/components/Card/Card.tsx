import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Switch, Card as CardFrame, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

type stringData = {
  data: {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
  };
}

const { Meta } = CardFrame;
const Card = ({data}:stringData)=> {

  const [state, setState] = useState(true);

  const onChange = () => {
    setState(!state)
  };
  console.log(data);
  return(
    <>
    <Switch checked={!state} onChange={onChange} />
    <CardFrame 
      loading={state} 
      actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
      ]}>
      <Skeleton loading={state} avatar active>
        <Meta
          key={data.id}
          avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> }
          title={data.name}
          description={data.email}
        />
      </Skeleton>
    </CardFrame>
    </>
  )
}

export default Card;