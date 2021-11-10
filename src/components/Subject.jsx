import { Table, Modal, Row, Col, Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { loadSubjects } from '../firebase';
import { sendCloudMessage } from '../cloud_function';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import PatientDetail from './PatientDetail';

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
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Logged In',
      dataIndex: 'fcmToken',
      key: 'fcmToken',
      render: token => <div>{token === "" || token == null ? "false" : "true"}</div>,
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

  useEffect(() => {
    setLoading(true)
    loadSubjects().then((value) => {
      setSubjects(value)
      setLoading(false)
    })
  }, []);

  return (
    <>
      {/* 先隱藏群發按鈕 */}
      {/* <Button type="primary" onClick={() => setSelectedSubject(subjects)}>
        Send Message to subjects</Button>
      <br />
      <br /> */}
      <h2>Patient Overview</h2>
      <Row>
        {/* <Col>
          <PatientInfoCard style={{ width: "200px" }} info={{}}></PatientInfoCard>
        </Col> */}
        <Col>
          <Table columns={columns} dataSource={subjects}
            loading={loading}
            expandable={{
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
      </Row>
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
    </>)
}
