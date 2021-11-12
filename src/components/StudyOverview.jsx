import { Card, Row, Col, Space, Statistic, Button } from "antd"
import { Bar } from 'ant-design-pro/lib/Charts';
import { Pie } from '@ant-design/charts';
import { RingProgress, Progress } from '@ant-design/charts';
import { DownloadOutlined } from "@ant-design/icons"
import AdverseEventCard from "./AdverseEventCard";

export default function StudyOverview() {
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

  const deviationData = [];
  for (let i = 0; i < 12; i += 1) {
    deviationData.push({
      x: `DV${i + 1}`,
      y: Math.floor(Math.random() * 50),
    });
  }

  const siteData = [
    { site: "US", count: 5 },
    { site: "CA", count: 3 },
    { site: "CN", count: 4 },
    { site: "TW", count: 10 },
    { site: "AUS", count: 5 }
  ]

  return (<div>
    <Row gutter={[8, 8]}>
      <Col span={22}><h2>Study Overview</h2></Col>
      <Col span={2}>
        <Button type="primary"><DownloadOutlined /></Button>
      </Col>
      <Col span={4}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card title="Study Name">
            <p>14122A</p>
          </Card>
          <Card title="Total site">
            {siteData.map(s => s.count).reduce((a, b) => a + b)}
          </Card>
          <Card title="Site Allocation">
            {siteData.map(s => <p key={s.site}>{s.site} - {s.count}</p>)}
          </Card>
        </Space>
      </Col>
      <Col span={20}>
        <Card title="Patient Recurrent">
          <Row>
            <Space direction="horizontal">
              <Statistic title="Target Progress" value={5} suffix="/ 10" />
              <RingProgress {...patientConfig} />
              <div>
                <p>Active: x</p>
                <p>Screen Failure: x</p>
                <p>On Treatment: x</p>
              </div>
              <div>
                <p>Completed: x</p>
                <p>Withdraw: x</p>
                <p>Early Termination: x</p>
              </div>
            </Space>
          </Row>
        </Card>
        <PatientPieChart />
        <Row style={{ width: "100%" }}>
          <Col span={12}>
            <Card title="ICF">
              <Statistic title="V2" value={3} suffix="/ 10" />
              <Progress {...icfConfig} />
              <Statistic title="V3" value={5} suffix="/ 10" />
              <Progress {...icfConfig} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Study Adherence" style={{ height: "100%" }}>
              <Statistic
                title="Study Adherence"
                value={88}
                precision={2}
                // valueStyle={{ color: '#3f8600' }}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col span={12}>
            <AdverseEventCard />
          </Col>
          <Col span={12}>
            <Card title="Deviation">
              <Bar height={200} data={deviationData} />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>)
}

const PatientPieChart = () => {
  var ageData = [
    {
      type: '18~24',
      value: 12,
    },
    {
      type: '25~34',
      value: 25,
    },
    {
      type: '35~45',
      value: 18,
    },
    {
      type: '45~',
      value: 15,
    }
  ];
  var genderData = [
    {
      type: 'Male',
      value: 55,
    },
    {
      type: 'Female',
      value: 45,
    }
  ];
  var ethnicsData = [
    {
      type: 'White',
      value: 45,
    },
    {
      type: 'African American',
      value: 25,
    },
    {
      type: 'American Indian ',
      value: 15,
    },
    {
      type: 'Asian',
      value: 35,
    }
  ];
  var config = {
    appendPadding: 10,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  const style = { height: "200px", width: "33%" }
  return (<Card title="Patient">
    <Row>
      <Col style={style}>
        <strong>Age</strong>
        <Pie data={ageData} {...config} />
      </Col>
      <Col style={style}>
        <strong>Gender</strong>
        <Pie data={genderData} {...config} />
      </Col>
      <Col style={style}>
        <strong>Ethnics</strong>
        <Pie data={ethnicsData} {...config} />
      </Col>
    </Row>
  </Card>)
}