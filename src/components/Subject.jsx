import { Table, Modal, Button, Space, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { loadSubjects } from '../firebase';
import { sendCloudMessage } from '../cloud_function';

export default function Subject() {

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
      render: (text, subject) => (
        <Space size="middle">
          <a onClick={() => setSelectedSubject(subject)}>Send message</a>
        </Space>
      ),
      width: '20%',
    },
  ];

  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [sendingMessage, setSendingMessage] = useState(false)
  const [messageForm] = Form.useForm();

  const sendMessage = (notificationData) => {
    sendCloudMessage({
      tokens: [selectedSubject.fcmToken],
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

    loadSubjects().then((value) => {
      setSubjects(value)
    })
  }, []);

  return (
    <>
      <Table style={{ width: "100vh" }} columns={columns} dataSource={subjects} />
      <Modal
        title={`Send message to ${selectedSubject && selectedSubject.name}`}
        style={{ top: 20 }}
        visible={selectedSubject}
        onOk={() => setSelectedSubject(null)}
        onCancel={() => setSelectedSubject(null)}
        okButtonProps={{ disabled: sendingMessage }}
        cancelButtonProps={{ disabled: sendingMessage }}
      >
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
