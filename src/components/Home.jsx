import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Dashboard from './Dashboard'
import Subject from './Subject'
import IcfDocument from './IcfDocument'
import SiteOverview from './SiteOverview'
import { Link, Redirect, useHistory, withRouter } from 'react-router-dom'
import { Layout, Form, Menu, Button } from 'antd';
import { Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import '../App.css';

const { Header, Content, Sider } = Layout;

export default function Home() {
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
      <Header style={{ backgroundColor: "#E5BFCB" }}>
        <h1 style={{ color: "#FFF" }}>AIVIE</h1>
      </Header>
      <Layout>
        <LeftSider></LeftSider>
        <RightContent></RightContent>
      </Layout>
    </Layout>
  )
}

const RightContent = () => {
  return (
    <div>
      <Content style={{ width: "1200px", padding: '24px', alignSelf: 'center' }}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/subjects" component={Subject} />
          <Route path="/site_overview" component={SiteOverview} />
          <Route path="/icfDocuments" component={IcfDocument} />
          <Redirect to="/dashboard" />
        </Switch>
      </Content>
    </div>
  );
}

const LeftSider = withRouter(({ history }) => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <Sider style={{ height: "auto", background: "#EFD3DF" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
      >
        <Menu.Item key="dashboard">
          <Link to="/dashboard" />
          Dashboard
        </Menu.Item>
        <Menu.Item key="subjects">
          <Link to="/subjects" />
          Patient Overview
        </Menu.Item>
        <Menu.Item key="site_overview">
          <Link to="/site_overview" />
          Site Overview
        </Menu.Item>
        <Menu.Item key="icfDocuments">
          <Link to="/icfDocuments" />
          ICF Documents
        </Menu.Item>
        <Menu.Item key="logout">
          <Button onClick={handleLogout}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
})
