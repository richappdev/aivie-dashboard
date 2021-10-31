import React from 'react'
import PatientInfoCard from './PatientInfoCard';
import PatientImprovementCard from './PatientImprovementCard';
import TeamCard from './TeamCard';
import QueryCard from './QueryCard';
import StatusCard from './StatusCard';
import { Row, Col } from 'antd';

export default function CaseInfo() {

  const patientInfo = {
    name: "Vinayag",
    gender: "male",
    age: 12,
    id: "123456",
    contact: "8903863780"
  }

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <PatientInfoCard info={patientInfo}></PatientInfoCard>
          <TeamCard size={5}></TeamCard>
        </Col>
        <Col span={18}>
          {/* <PatientInfoCard info={patientInfo}></PatientInfoCard> */}
          <Row gutter={[8, 8]}>
            <Col span={24}><StatusCard /></Col>
            <Col span={12}>
              <PatientImprovementCard size={5}></PatientImprovementCard>
            </Col>
            <Col span={12}>
              <QueryCard></QueryCard>
            </Col>
          </Row>
        </Col>
      </Row>,

      {/* <PatientInfo info={patientInfo}></PatientInfo> */}

    </>
  )
}