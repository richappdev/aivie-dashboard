import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Card, Input, Form, Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

export default function Login() {
  const [ form ] = Form.useForm()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const history = useHistory()

  async function onFinish(values) {

    try {
      setError('')
      setLoading(true)
      await login(values.account, values.password)
      history.push("/")
    } catch (e) {
      setError(e.message)
    }

    setLoading(false)
  }


  return (
    <Layout style={{ height: '100vh' }}>
      <Header>Header</Header>
      <Content style={{ padding: '50px', alignSelf: 'center' }}>
        <Card title="AIVIE Login" style={{ width: 400, textAlign: 'center' }}>
          {error && <div>{error}</div>}
          <Form name="basic" form={form} onFinish={onFinish}>
            <Form.Item name="account" rules={[{ required: true }]}>
              <Input size="large" placeholder="account"></Input>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password size="large" placeholder="password"></Input.Password>
            </Form.Item>
            <Form.Item>
            <Button style={{width: 300}} type="primary" htmlType="submit" disabled={loading}>Login</Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
