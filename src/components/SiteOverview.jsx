import { Card, Row, Col, Statistic, Space, Button } from "antd"
import { Bar } from 'ant-design-pro/lib/Charts';
import { RingProgress, Progress } from '@ant-design/charts';
import { DownloadOutlined } from "@ant-design/icons"

export default function SiteOverview() {
  const patientConfig = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.5,
    color: ['#5B8FF9', '#E8EDF3'],
  };

  const icfConfig = {
    height: 10,
    width: 300,
    autoFit: false,
    percent: 0.5,
    barWidthRatio: 0.3,
    color: ['#5B8FF9', '#E8EDF3'],
  };

  const adverseEventData = [];
  for (let i = 0; i < 12; i += 1) {
    adverseEventData.push({
      x: `AE${i + 1}`,
      y: Math.floor(Math.random() * 1000) + 200,
    });
  }
  const deviationData = [];
  for (let i = 0; i < 12; i += 1) {
    deviationData.push({
      x: `DV${i + 1}`,
      y: Math.floor(Math.random() * 1000) + 200,
    });
  }

  return (<div>
    <Row gutter={[8, 8]}>
      <Col span={22}><h2>Site Overview</h2></Col>
      <Col span={2}>
        <Button type="primary"><DownloadOutlined /></Button>
      </Col>
      <Col span={4}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card title="Organizations">
            <p>NTUH</p>
          </Card>
          <Card title="Study Team">
            <p>Study Team1</p>
            <p>Study Team2</p>
          </Card>
        </Space>
      </Col>
      <Col span={10}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card title="Patient">
            <Row>
              <Statistic title="Target Progress" value={5} suffix="/ 10" />
              <RingProgress {...patientConfig} />
            </Row>
          </Card>
          <Card title="Adverse Event">
            <Bar height={200} data={adverseEventData} />
          </Card>
        </Space>
      </Col>
      <Col span={10}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card title="ICF">
            <Statistic title="V2" value={3} suffix="/ 10" />
            <Progress {...icfConfig} />
            <Statistic title="V3" value={5} suffix="/ 10" />
            <Progress {...icfConfig} />
          </Card>
          <Card title="Deviation">
            <Bar height={200} data={deviationData} />
          </Card>
        </Space>
      </Col>
    </Row>
  </div>)
}