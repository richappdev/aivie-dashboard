import { Card } from "antd"
import { Column } from '@ant-design/charts';

export default function AdverseEventCard() {
  const adverseEventData = [];
  for (let i = 0; i < 12; i += 1) {
    const type = (i % 3 ? 'AE' : 'SAE')
    adverseEventData.push({
      type: type,
      x: `${type}${i + 1}`,
      y: Math.floor(Math.random() * 50),
    });
  }

  const aeBarConfig = {
    data: adverseEventData,
    xField: 'x',
    yField: 'y',
    seriesField: 'type',
    color: (_ref) => _ref.type === "AE" ? '#5B8FF9' : '#F4664A'
  };

  return (
    <Card title="Adverse Event">
      <Column {...aeBarConfig} height={200} />
    </Card>
  )
}