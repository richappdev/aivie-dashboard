import React from 'react'
import { Card, Steps, Space, Row, Col, Statistic } from 'antd';
import moment from 'moment'

const { Step } = Steps;

export default function PatientDetail() {
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card>
        <Steps size="small" current={2}>
          <Step title="Screening" />
          <Step title="Randomized" />
          <Step title="V3" />
          <Step title="V4" />
          <Step title="V5" />
          <Step title="EOT" />
        </Steps>
      </Card>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Card size="small" title="Patient Improvement">
            <Statistic
              value={88.0}
              precision={2}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card size="small" title="Patient IP Adherence">
            <Statistic
              value={90.0}
              precision={2}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={8}><Card size="small" title="Ongoing AE">
          <p>Headache 3 day</p>
          <p>Diarrhea 7 day</p>
        </Card></Col>
        <Col span={8}><Card size="small" title="SAE">
          <p>Hospitalization onset date-resolve date</p>
          <p>{moment().add(-4, 'days').format("YYYY-MM-DD")} ~ {moment().format("YYYY-MM-DD")}</p>
        </Card></Col>
        <Col span={8}><Card size="small" title="Drug Interruption">Yes</Card></Col>
      </Row>
    </Space>)
}