import { useEffect, useState } from 'react';
import axios from 'axios';

import TopPanel from './TopPanel';

export default function Occupancy() {
  const [occupancy, setOccupancy] = useState();

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await axios(
        'http://localhost:3001/api/occupancy/',
      );

      setOccupancy(result.data);
    }, 1000);
    return () => clearInterval(interval);
  })

  // if (!occupancy) return <div></div>; // SKELLY CONTENT

  return (
    <TopPanel bg="bg-blue" icon="social_distance">
      <div className="font-bold text-xl text-whiteOpacity">Live Occupancy</div>
      <div className="col-start-0 row-start-2 mt-2 flex items-baseline">
        <div className="text-main font-bold text-white">20</div>
        <span className="font-semibold text-whiteOpacity ml-3 text-xl">/ 40</span>
      </div>
    </TopPanel>
  )
}
