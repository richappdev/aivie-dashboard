import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Subject from './Subject'
import IcfDocument from './IcfDocument'
import SiteOverview from './SiteOverview'
import StudyOverview from './StudyOverview'
import PermissionTable from './PermissionTable'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { Switch, Route } from 'react-router-dom'
import {
  AuditOutlined,
  MedicineBoxOutlined,
  KeyOutlined,
  TeamOutlined,
  BookOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../App.css';
import logoImg from '../image/aivie.png'

const { Header, Content, Sider } = Layout;

export default function Home() {
  // const [form] = Form.useForm()
  // const [error, setError] = useState()
  // const [loading, setLoading] = useState(false)
  // const { login, currentUser } = useAuth()
  // const history = useHistory()

  // async function onFinish(values) {
  //   console.log(values);

  //   try {
  //     setError('')
  //     setLoading(true)
  //     await login(values.account, values.password)
  //     history.push("/")
  //   } catch (e) {
  //     setError(e.message)
  //   }

  //   setLoading(false)
  // }


  return (
    <Layout>
      <Header style={{ backgroundColor: "#E5BFCB" }}>
        <h1>
          <a href="/permission" style={{ color: "#FFF" }}>
            <img src={logoImg} alt="logo" height={50} />
            AIVIE
          </a>
        </h1>
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
    <Content style={{ minHeight: '100vh', width: "100%", padding: '24px', alignSelf: 'center' }}>
      <Switch>
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/permission" component={PermissionTable} />
        <Route path="/subjects" component={Subject} />
        <Route path="/study_overview" component={StudyOverview} />
        <Route path="/site_overview" component={SiteOverview} />
        <Route path="/icf_documents" component={IcfDocument} />
        <Redirect to="/permission" />
      </Switch>
    </Content>
  );
}

const LeftSider = withRouter(({ history }) => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = () => setCollapsed(!collapsed)

  return (
    <Sider theme="light"
      collapsible collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ height: "auto" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/permission']}
      >
        {/* <Menu.Item key="dashboard">
          <Link to="/dashboard" />
          Dashboard
        </Menu.Item> */}
        <Menu.Item key="permission" icon={<KeyOutlined />}>
          <Link to="/permission" />
          <strong>Permission</strong>
        </Menu.Item>
        <Menu.Item key="subjects" icon={<TeamOutlined />}>
          <Link to="/subjects" />
          <strong>Patient Overview</strong>
        </Menu.Item>
        <Menu.Item key="study_overview" icon={<BookOutlined />}>
          <Link to="/study_overview" />
          <strong>Study Overview</strong>
        </Menu.Item>
        <Menu.Item key="site_overview" icon={<MedicineBoxOutlined />}>
          <Link to="/site_overview" />
          <strong>Site Overview</strong>
        </Menu.Item>
        <Menu.Item key="icf_documents" icon={<AuditOutlined />}>
          <Link to="/icf_documents" />
          <strong>ICF Documents</strong>
        </Menu.Item>
        {/* <Menu.Item key="logout">
          <Button onClick={handleLogout}>Logout</Button>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
})
