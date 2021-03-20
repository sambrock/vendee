import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { DateTime } from 'luxon';

const TrafficWeek = () => {
  const [traffic, setTraffic] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/api/traffic/week')
      .then(res => setTraffic(res.data));
  }, [])

  const series1 = {
    name: 'Last week',
    data: traffic.filter((t, i) => i <= 6),
  };

  const series2 = {
    name: 'This week',
    data: traffic.filter((t, i) => i > 6),
  };

  const dates = [];
  let i;
  for (i = 0; i < 7; i++) {
    dates.push(DateTime.local().minus({ days: i }).weekdayLong)
  }

  const id = 'basic-bar';
  const xaxis = { categories: dates.reverse() }

  return (
    <Chart className="apex-chart" options={{ id, xaxis, colors: ['var(--blue2)', 'var(--blue)'] }} series={[series1, series2]} type="bar" height="320" />
  )
};

export default TrafficWeek;