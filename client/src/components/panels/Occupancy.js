import React from 'react';
import { useEffect, useState } from 'react';

import { apiRequest } from '../../api'
import TopPanel from '../TopPanel';

export default function Occupancy() {
  const [occupancy, setOccupancy] = useState(JSON.parse(localStorage.getItem('/api/traffic/occupancy')));

  const maxOccupancy = 40;

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      if (active) {
        apiRequest('/api/traffic/occupancy')
          .then(res => setOccupancy(res.data))
          .catch(err => console.log(err));
      }
    }

    fetchData();
    return () => {
      active = false;
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await apiRequest('/api/traffic/occupancy');
      if (result) setOccupancy(result.data);
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  if (!occupancy) return <div></div>;

  return (
    <TopPanel bg={occupancy.count > maxOccupancy ? "bg-red" : "bg-blue"} icon="social_distance">
      <div className="font-bold text-xl text-whiteOpacity">Live Occupancy</div>
      <div className="col-start-0 row-start-2 mt-2 flex items-baseline">
        <div className="text-main font-bold text-white">{occupancy.count}</div>
        <span className="font-semibold text-whiteOpacity ml-3 text-xl">/ {maxOccupancy}</span>
      </div>
    </TopPanel>
  )
}
