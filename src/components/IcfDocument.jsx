import { Table, Button, Space } from 'antd';
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
    title: 'Release Time',
    dataIndex: 'releaseTime',
    key: 'releaseTime',
    render: date => <div>{date.toDate().toString()}</div>,
    width: '30%',
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
    width: '10%',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div>
        <Button type="primary">Edit</Button>
        <Button type="primary" danger>Delete</Button>
      </div>
    ),
    width: '30%',
  },
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
