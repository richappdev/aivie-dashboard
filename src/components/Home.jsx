import React, { useState, useEffect } from 'react'
import { loadProfile, fetchUserPhoto } from '../firebase';
import { useAuth } from '../context/AuthContext'
import Subject from './Subject'
import IcfDocument from './IcfDocument'
import SiteOverview from './SiteOverview'
import StudyOverview from './StudyOverview'
import PermissionTable from './PermissionTable'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Layout, Menu, Col, Row, Dropdown, Avatar, Affix } from 'antd';
import { Switch, Route } from 'react-router-dom'
import {
  AuditOutlined,
  MedicineBoxOutlined,
  KeyOutlined,
  TeamOutlined,
  BookOutlined,
  LogoutOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../App.css';
import logoImg from '../image/aivie.png'

const { Header, Content, Sider, Footer } = Layout;

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

  const { logout, currentUser } = useAuth()
  const [collapsed, setCollapsed] = useState(true)
  const [profile, setProfile] = useState(undefined)
  useEffect(() => {
    loadProfile(currentUser.uid).then(async (value) => {
      const photoUrl = await fetchUserPhoto(value);
      value.photoUrl = photoUrl
      setProfile(value)
    })
  }, [currentUser]);


  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile (TBD)
      </Menu.Item>
      <Menu.Item key="2" onClick={logout} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <LeftSider collapsed={collapsed}></LeftSider>
      <Layout>
        <Affix offsetTop={0}>
          <Header style={{ padding: '0 24px', backgroundColor: "#E5BFCB" }}>
            <Row>
              <Col>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  style: { cursor: 'pointer', color: "#FFF" },
                  onClick: () => setCollapsed(!collapsed),
                })}
              </Col>
              <Col push={23}>
                <Dropdown overlay={menu}>
                  <a href style={{ color: "#FFF" }}>
                    {profile && <Avatar src={profile.photoUrl ?? ""} size="large" icon={<UserOutlined />} />}
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </Header>
        </Affix>
        <Content style={{ padding: '24px', minHeight: '100vh', overflow: 'initial' }}>
          <Switch>
            {/* <Route path="/dashboard" component={Dashboard} /> */}
            <Route path="/permission" component={PermissionTable} />
            <Route path="/subjects" component={Subject} />
            <Route path="/study_overview" component={StudyOverview} />
            <Route path="/site_overview" component={SiteOverview} />
            <Route path="/icf_documents" component={IcfDocument} />
            <Redirect to="/permission" />
          </Switch>
          <Footer style={{ textAlign: "center" }}>© 2021 AIVIE LLC</Footer>
        </Content>
      </Layout>
    </Layout>
  )
}

const LeftSider = withRouter(({ ...props }) => {

  return (
    <Sider theme="light"
      collapsed={props.collapsed}>
      <Affix>
        <Menu
          mode="inline"
          defaultSelectedKeys={['/permission']}
        >
          <div style={{ height: "32px", margin: "16px 16px 32px 16px" }}>
            <a href="/permission" >
              <Row style={{ alignItems: "center" }}>
                <Col span={8}><img src={logoImg} alt="logo" height={48} /></Col>
                <Col span={12}><h2 style={{ color: "#E5BFCB", margin: "16px 0" }}>
                  {props.collapsed ? "" : "AIVIE"}
                </h2></Col>
              </Row>
            </a>
          </div>
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
      </Affix>
    </Sider>
  );
})
