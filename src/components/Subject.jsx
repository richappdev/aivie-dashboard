import { Table, Tag, Space } from 'antd';
import { useEffect, useState } from 'react';
import { loadSubjects } from '../firebase';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '30%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: '30%',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Send message</a>
      </Space>
    ),
    width: '20%',
  },
];

export default function Subject() {

  const [subjects, setSubjects] = useState([])
  useEffect(() => {

    loadSubjects().then((value) => {
      setSubjects(value)
    })
    // setSubjects()
  }, []);
  return (<Table style={{ width: "100vh" }} columns={columns} dataSource={subjects} />)
}
