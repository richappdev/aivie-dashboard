import { Table } from 'antd';
import { CheckCircleTwoTone, ExclamationCircleTwoTone, WarningTwoTone, StopTwoTone } from "@ant-design/icons"

export default function PatientInfoCard({ ...props }) {
  const EDIT_AND_VIEW = "edit_and_view"
  const VIEW_ONLY = "view_only"
  const VIEW_QUERY_ONLY = "view_query_only"
  const NO_ACCESS = "no_access"
  const NONE = "none"

  const dataSource = [
    {
      key: '1',
      role: 'Study Overview',
      sponsor: EDIT_AND_VIEW,
      cro: EDIT_AND_VIEW,
      doctor: NONE,
      study_nurse: NONE,
      caregiver: NONE,
    },
    {
      key: '2',
      role: 'Site Overview',
      sponsor: VIEW_QUERY_ONLY,
      cro: VIEW_QUERY_ONLY,
      doctor: EDIT_AND_VIEW,
      study_nurse: EDIT_AND_VIEW,
      caregiver: NONE,
    },
    {
      key: '3',
      role: 'Patient Overview',
      sponsor: VIEW_QUERY_ONLY,
      cro: VIEW_QUERY_ONLY,
      doctor: EDIT_AND_VIEW,
      study_nurse: EDIT_AND_VIEW,
      caregiver: VIEW_ONLY,
    },
  ];

  const render = (text, record) => {
    switch (text) {
      case EDIT_AND_VIEW:
        return (<CheckCircleTwoTone twoToneColor="#52c41a" />)
      case VIEW_ONLY:
        return (<ExclamationCircleTwoTone />)
      case VIEW_QUERY_ONLY:
        return (<WarningTwoTone twoToneColor="#f1c232" />)
      case NO_ACCESS:
        return (<StopTwoTone twoToneColor="#f44336" />)
      default:
        return (<></>)
    }
  }

  const columns = [
    {
      title: '',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Sponsor',
      dataIndex: 'sponsor',
      key: 'sponsor',
      render: render
    },
    {
      title: 'CRO',
      dataIndex: 'cro',
      key: 'cro',
      render: render
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
      render: render
    },
    {
      title: 'Study nurse',
      dataIndex: 'study_nurse',
      key: 'study_nurse',
      render: render
    },
    {
      title: 'Caregiver',
      dataIndex: 'caregiver',
      key: 'caregiver',
      render: render
    },
  ];

  return (
    <div>
      <h2>Permission</h2>
      <Table dataSource={dataSource} columns={columns} />
      <div>
        <CheckCircleTwoTone twoToneColor="#52c41a" /> Edit and View<br />
        <ExclamationCircleTwoTone /> View Only<br />
        <WarningTwoTone twoToneColor="#f1c232" /> View and Query Only<br />
        <StopTwoTone twoToneColor="#f44336" /> No Access<br />
      </div>
    </div>)
}