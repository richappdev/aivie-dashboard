import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import moment from 'moment';

const DemoLine = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // asyncFetch();
    generateData()
  }, []);
  const asyncFetch = () => {
    // fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setData(json)
    //     console.log(json)
    //   })
    //   .catch((error) => {
    //     console.log('fetch data failed', error);
    //   });
  };

  const generateData = () => {
    const visitData = []
    const beginDay = new Date().getTime()
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
    for (let i = 0; i < 20; i += 1) {
      adverseEvents.forEach((e, index) => {
        visitData.push({
          date: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
          value: Math.floor(Math.random() * 10 + 10) * i * (index % 3),
          category: e
        });
      })
    }
    setData(visitData)
  }
  var config = {
    data: data,
    xField: 'date',
    yField: 'value',
    seriesField: 'category',
    xAxis: { type: 'time' },
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
  };
  return <Line {...config} />;
};

export default DemoLine;