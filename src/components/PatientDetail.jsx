import React from 'react'
import { Card, Steps, Space } from 'antd';
import PatientImprovementCard from './PatientImprovementCard';

const { Step } = Steps;

export default function PatientDetail() {
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card>
        <Steps size="small" current={2}>
          <Step title="Finished" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
          <Step title="V3" description="V3" />
        </Steps>
      </Card>
      <PatientImprovementCard></PatientImprovementCard>
      <Card style={{ height: 100 }} size="small" title="AE Dosing Log"></Card>
    </Space>)
}