import { ChartCard, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import { Row, Col } from 'antd';
import numeral from 'numeral';
import moment from 'moment';

const DemoChartCards = () => {

  const visitData = [];
  const beginDay = new Date().getTime();
  for (let i = 0; i < 20; i += 1) {
    visitData.push({
      x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
      y: Math.floor(Math.random() * 100) + 10,
    });
  }

  return(
    <Row>
      <Col span={24}>
        <ChartCard title="用藥遵循率" total={numeral(8846).format('0,0')} contentHeight={134}>
          <NumberInfo
            status="up"
          />
          <MiniArea line height={45} data={visitData} />
        </ChartCard>
      </Col>
      <Col span={24} style={{ marginTop: 24 }}>
        <ChartCard
          title="不良反應"
          total={numeral(8846).format('0,0')}
          contentHeight={134}
        >
          <MiniBar height={80} data={visitData} />
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
    </Row>
  );
}

export default DemoChartCards;