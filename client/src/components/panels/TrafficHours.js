import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { apiRequest } from '../../api';

const TrafficHours = () => {
  const [traffic, setTraffic] = useState(JSON.parse(localStorage.getItem('/api/traffic/hour')));

  useEffect(() => {
    apiRequest('/api/traffic/hour')
      .then(res => setTraffic(res.data));
  }, [])

  const xaxis = {
    categories: traffic.map(h => `${h.hour}:00`)
  }

  const series = [{
    name: 'Traffic',
    data: traffic.map(h => h.count)
  }]

  if (traffic.length === 0) return <div></div>

  return (
    <Chart className="apex-chart" options={{ xaxis, colors: ['var(--blue)'], title: { text: '' } }} height="320" series={series} type="line" />
  )
}

export default TrafficHours;