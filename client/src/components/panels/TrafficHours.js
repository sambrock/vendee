import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { apiRequest } from '../../api';

const TrafficHours = () => {
  const [traffic, setTraffic] = useState(JSON.parse(localStorage.getItem('/api/traffic/hour')));

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      if (active) {
        apiRequest('/api/traffic/hour')
          .then(res => setTraffic(res.data));
      }
    }

    fetchData();
    return () => {
      active = false;
    }
  }, [])



  if (!traffic) return <div></div>
  
  const xaxis = {
    categories: traffic.map(h => `${h.hour}:00`)
  }

  const series = [{
    name: 'Traffic',
    data: traffic.map(h => h.count)
  }]

  return (
    <Chart className="apex-chart" options={{ xaxis, colors: ['var(--blue)'], title: { text: '' } }} height="320" series={series} type="line" />
  )
}

export default TrafficHours;