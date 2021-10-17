import { ChartCard, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import { Row, Col } from 'antd';
import numeral from 'numeral';
import moment from 'moment';
import DemoLine from '../components/DemoLine'

const DemoChartCards = () => {

  const visitData = [];
  const beginDay = new Date().getTime();
  for (let i = 0; i < 20; i += 1) {
    visitData.push({
      x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
      y: Math.floor(Math.random() * 100) + 10,
    });
  }
  const adverseEvents = [
    "Headache",
    "Nausea",
    "Dry mouth",
    "Insomnia",
    "Dizziness",
    "Diarrhea or constipation",
    "Sexual problems",
    "Fatigue",
    "Weight gain",
    "Tremors",
    "Increased sweating"
  ]

  return (
    <Row style={{width: "100vh"}}>
      <Col span={24}>
        <ChartCard title="用藥遵循率" contentHeight={134}>
          <NumberInfo
            status="up"
          />
          <MiniArea line height={45} data={visitData} />
        </ChartCard>
      </Col>
      <Col span={24} style={{ marginTop: 24 }}>
        <ChartCard
          title="ICF簽署比例"
          total="98%"
          contentHeight={68}
        >
          <MiniProgress percent={78} strokeWidth={8} target={80} />
        </ChartCard>
      </Col>
      <h2 style={{ marginTop: 24 }}>Adverse Events</h2>
      {adverseEvents.map((ae, i) => {
        return (
          <Col key={ae} span={24}>
            <ChartCard
              title={ae}
              contentHeight={64}
            >
              <MiniBar height={32} data={visitData} />
            </ChartCard>
          </Col>)
      })}
    </Row>
  );
}

export default DemoChartCards;