import { Card, Row, Col, Statistic } from "antd"
import { Bar } from 'ant-design-pro/lib/Charts';
import { RingProgress, Progress } from '@ant-design/charts';

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

  const salesData = [];
  for (let i = 0; i < 12; i += 1) {
    salesData.push({
      x: `AE${i + 1}`,
      y: Math.floor(Math.random() * 1000) + 200,
    });
  }

  return (<div>
    <h2>Site Overview</h2>
    <Row gutter={[8, 8]}>
      <Col span={4}>
        <Card title="Organizations">
          <p>NTUH</p>
          <p>NTUH</p>
        </Card>
      </Col>
      <Col span={10}>
        <Card title="Patient">
          <Row>
            <Statistic title="Target Progress" value={5} suffix="/ 10" />
            <RingProgress {...patientConfig} />
          </Row>
        </Card>
        <Card title="Adverse Event">
          <Bar height={200} data={salesData} />
        </Card>
      </Col>
      <Col span={10}>
        <Card title="ICF">
          <Statistic title="V2" value={3} suffix="/ 10" />
          <Progress {...icfConfig} />
          <Statistic title="V3" value={5} suffix="/ 10" />
          <Progress {...icfConfig} />
        </Card>
        <Card title="Deviation">
          <Bar height={200} data={salesData} />
        </Card>
      </Col>
    </Row>,
  </div>)
}