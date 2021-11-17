import { Table, Modal, Row, Col, Button, Form, Input, Affix } from 'antd';
import { useEffect, useState } from 'react';
import { loadSubjects } from '../firebase';
import { sendCloudMessage } from '../cloud_function';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import PatientDetail from './PatientDetail';
import PatientInfoCard from './PatientInfoCard';

export default function Subject() {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <div>{text}</div>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, subject) => (
        <Button type="primary"
          onClick={() => setSelectedSubject(subjects.filter(s => s === subject))}>
          Send message</Button>
      ),
    },
  ];

  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [expandedRowKey, setExpandedRowKey] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [sendingMessage, setSendingMessage] = useState(false)
  const [messageForm] = Form.useForm();

  const sendMessage = (notificationData) => {
    const tokens = selectedSubject.map(s => s.fcmToken)
    console.log(tokens);
    sendCloudMessage({
      tokens: tokens,
      notification: notificationData
    }).then((value) => {
      setSendingMessage(false)
      setSelectedSubject(null)
      messageForm.resetFields()
    }).catch((err) => {
      setSendingMessage(false)
      setSelectedSubject(null)
    })
    setSendingMessage(true)
  }

  useEffect(() => { onSearch("") }, []);

  const onSearch = (text) => {
    setLoading(true)
    loadSubjects().then((value) => {
      setSubjects(value.filter(s => (s.name.includes(text)) || s.email.includes(text)))
      setLoading(false)
    })
  }

  return (
    <>
      <Row gutter={[8, 8]}>
        {/* 先隱藏群發按鈕 */}
        {/* <Button type="primary" onClick={() => setSelectedSubject(subjects)}>
        Send Message to subjects</Button>
      <br />
      <br /> */}
        <Col span={6}><h2>Patient Overview</h2></Col>
        <Col span={18}><Input.Search placeholder="Search by Name or Email" onSearch={onSearch} style={{ width: 'auto' }} /></Col>
        <Col span={6}>
          <Affix offsetTop={80}>
            <PatientInfoCard
              info={expandedRowKey ? subjects.filter(s => s.key === expandedRowKey)[0] : {}}>
            </PatientInfoCard>
          </Affix>
        </Col>
        <Col span={18}>
          <Table size="small" columns={columns} dataSource={subjects}
            scroll={{ y: "70vh" }}
            bordered
            loading={loading}
            expandable={{
              expandedRowKeys: [expandedRowKey],
              onExpand: (expanded, record) => {
                setExpandedRowKey(expanded ? record.key : undefined);
              },
              expandedRowRender: record => <PatientDetail></PatientDetail>,
              rowExpandable: record => record.name !== 'Not Expandable',
              expandIcon: ({ expanded, onExpand, record }) =>
                expanded ? (
                  <CaretDownOutlined onClick={(e) => onExpand(record, e)} />
                ) : (
                  <CaretRightOutlined onClick={(e) => onExpand(record, e)} />
                )
            }}
          />
        </Col>
        <Modal
          title={`Send message`}
          style={{ top: 20 }}
          visible={selectedSubject}
          onOk={() => setSelectedSubject(null)}
          onCancel={() => setSelectedSubject(null)}
          okButtonProps={{ disabled: sendingMessage }}
          cancelButtonProps={{ disabled: sendingMessage }}
        >
          <div>Send List:</div>
          {selectedSubject && selectedSubject.map(subject => (
            <div>{subject.name}</div>
          ))}
          <Form
            name="basic"
            form={messageForm}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={sendMessage}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'enter message title' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Body"
              name="body"
              rules={[{ required: true, message: 'enter message body' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button disabled={sendingMessage} type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Row>
    </>
  )
}
