import { Table, Space } from 'antd';
import { useEffect, useState } from 'react';
import { loadIcfDocuments } from '../firebase';

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
    render: text => <a>{text}</a>,
    width: '20%',
  },
  {
    title: 'Release',
    dataIndex: 'releaseTime',
    key: 'releaseTime',
    width: '30%',
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
    width: '30%',
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Send message</a>
  //     </Space>
  //   ),
  //   width: '20%',
  // },
];

export default function IcfDocument() {

  const [icfDocuments, setIcfDocuments] = useState([])
  useEffect(() => {

    loadIcfDocuments().then((value) => {
      setIcfDocuments(value)
    })
    // setSubjects()
  }, []);
  return (<Table style={{ width: "100vh" }} columns={columns} dataSource={icfDocuments} />)
}
