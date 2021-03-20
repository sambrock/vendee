import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const TrafficHours = () => {
  const [traffic, setTraffic] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/api/traffic/hour')
      .then(res => setTraffic(res.data));
  }, [])

  const xaxis = {
    categories: traffic.map(h => `${h.hour}:00`)
  }

  const series = [{
    name: 'Traffic',
    data: traffic.map(h => h.count)
  }]

  if (!traffic) return <div></div>

  return (
    <Chart className="apex-chart" options={{ xaxis, colors: ['var(--blue)'], title: { text: '' } }} height="320" series={series} type="line" />
  )
}

export default TrafficHours;