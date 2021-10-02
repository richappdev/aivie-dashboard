import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import ChartPage from '../components/ChartPage'
import DemoChartCards from '../components/DemoChartCards'
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
    <Layout style={{ height: '100vh'}}>
      <Header style={{backgroundColor: "white"}}>
        <h1>AIVIE</h1>
      </Header>
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
      <Content style={{ padding: '50px', alignSelf: 'center', width: '100vh' }}>
        <Switch>
          <Route path="/dashboard" component={DemoChartCards} />
          <Route path="/demoChartCards" component={DemoChartCards} />
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
    <Sider style={{ height: "100vh" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
      >
        <Menu.Item key="/dashboard">
          <Link to="/dashboard" />
          Dashboard
        </Menu.Item>
        <Menu.Item key="/demoChartCards">
          <Link to="/demoChartCards" />
          demoChartCards
        </Menu.Item>
        {/* <Menu.Item key="/3">
          <Link to="/3" />
          option3
        </Menu.Item> */}
        <Menu.Item>
          <Button onClick={handleLogout}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
})
