import React from 'react';
import { Line } from '@ant-design/charts';
// import { ChartCard, Field, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';


const ChartPage = () => {
  const data = [
    { month: '1', value: 3 },
    { month: '2', value: 3 },
    { month: '3', value: 3 },
    { month: '4', value: 3 },
    { month: '5', value: 3 },
    { month: '6', value: 3 },
    { month: '7', value: 3 },
    { month: '8', value: 3 },
    { month: '9', value: 3 },
    { month: '10', value: 3 },
    { month: '11', value: 3 },
    { month: '12', value: 3 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'month',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default ChartPage;