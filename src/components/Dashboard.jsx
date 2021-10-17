import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import DemoChartCards from '../components/DemoChartCards'
import DemoLine from '../components/DemoLine'
import Subject from '../components/Subject'
import IcfDocument from '../components/IcfDocument'
import { Link, Redirect, useHistory, withRouter } from 'react-router-dom'
import { Layout, Form, Menu, Button } from 'antd';
import { Switch, Route } from 'react-router-dom'
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
      <Content style={{ padding: '50px', alignSelf: 'center'}}>
        <Switch>
          <Route path="/dashboard" component={DemoChartCards} />
          <Route path="/demoChartCards" component={DemoLine} />
          <Route path="/subjects" component={Subject} />
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
    <Sider style={{ height: "100vh", background: "#EFD3DF"}}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
      >
        <Menu.Item key="dashboard">
          <Link to="/dashboard" />
          Dashboard
        </Menu.Item>
        <Menu.Item key="demoChartCards">
          <Link to="/demoChartCards" />
          demoChartCards
        </Menu.Item>
        <Menu.Item key="subjects">
          <Link to="/subjects" />
          Subjects
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
