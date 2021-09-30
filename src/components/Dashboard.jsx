import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, Redirect, useHistory, withRouter } from 'react-router-dom'
import { Layout, Form, Menu, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';

const { Header, Footer, Content, Sider } = Layout;

export default function Dashboard() {
  const [form] = Form.useForm()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const { login, currentUser } = useAuth()
  const history = useHistory()

  async function onFinish(values) {
    console.log(values);

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
      <Layout>
        <LeftSider></LeftSider>
        <RightContent></RightContent>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

const RightContent = () => {
  return (
    <div>
      <Content style={{ padding: '50px', alignSelf: 'center' }}>
        <div>dashboard content</div>
        <Switch>
          <Route path="/1" component={Demo1} />
          <Route path="/2" component={Demo2} />
          <Route path="/3" component={Demo3} />
          <Redirect to="/1" />
        </Switch>
      </Content>
    </div>
  );
}

const LeftSider = withRouter(({ history }) => {
  const { logout } = useAuth()
  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    logout()
  }

  return (
    <Sider style={{ height: "100vh" }} collapsed={collapsed}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/1']}
      >
        <Button onClick={e => { setCollapsed(!collapsed) }}>toggle</Button>
        <Menu.Item key="/1">
          <Link to="/1" />
          option1
        </Menu.Item>
        <Menu.Item key="/2">
          <Link to="/2" />
          option2
        </Menu.Item>
        <Menu.Item key="/3">
          <Link to="/3" />
          option3
        </Menu.Item>
        <Menu.Item>
          <Button onClick={handleLogout}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
})

const Demo1 = () => {
  return (
    <div>
      demo1
    </div>
  );
}

const Demo2 = () => {
  return (
    <div>
      demo2
    </div>
  );
}

const Demo3 = () => {
  return (
    <div>
      demo3
    </div>
  );
}