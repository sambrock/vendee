import { useEffect, useState } from 'react';

import { getOccupancy } from '../api'
import TopPanel from './TopPanel';

export default function Occupancy() {
  const [occupancy, setOccupancy] = useState();

  useEffect(() => {
    getOccupancy()
      .then(res => setOccupancy(res.data));
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await getOccupancy();

      setOccupancy(result.data);
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  if (!occupancy) return <div></div>; // SKELLY CONTENT

  return (
    <TopPanel bg="bg-blue" icon="social_distance">
      <div className="font-bold text-xl text-whiteOpacity">Live Occupancy</div>
      <div className="col-start-0 row-start-2 mt-2 flex items-baseline">
        <div className="text-main font-bold text-white">{occupancy.count}</div>
        <span className="font-semibold text-whiteOpacity ml-3 text-xl">/ 40</span>
      </div>
    </TopPanel>
  )
}
