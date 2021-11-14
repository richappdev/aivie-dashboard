import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { Layout, Card, Input, Form, Button } from 'antd';
import 'antd/dist/antd.css';
import logoImg from '../image/aivie.png'

const { Header, Footer, Content } = Layout;

export default function Login() {
  const [form] = Form.useForm()
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
      <Header style={{ backgroundColor: "#E5BFCB" }} />
      <Content style={{ padding: '50px', alignSelf: 'center' }}>
        <Card style={{ width: 400, alignItems: "center", textAlign: 'center' }}>
          <img src={logoImg} alt="logo" height={48} />
          <h1 style={{ color: "#E5BFCB" }}>AIVIE</h1>
          <Form name="basic" form={form} onFinish={onFinish}>
            <Form.Item name="account" rules={[{ required: true }]}>
              <Input size="large" placeholder="account"></Input>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password size="large" placeholder="password"></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ width: 300, color: "#FFF", backgroundColor: "#E5BFCB" }}
                htmlType="submit" loading={loading}>Login
              </Button>
            </Form.Item>
            {error && <div>{error}</div>}
          </Form>
        </Card>
      </Content>
      <Footer style={{ textAlign: "center" }}>© 2021 AIVIE LLC</Footer>
    </Layout>
  )
}
