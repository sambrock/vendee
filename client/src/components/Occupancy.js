import { useEffect, useState } from 'react';
import axios from 'axios';

import Panel from './Panel';

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

  if (!occupancy) return <div></div>;

  return (
    <Panel>
      <span className="flex justify-center mr-2 items-center row-span-2 text-heading material-icons-round mr-4 text-whiteOpacity bg-blackOpacity2 w-full">social_distance</span>
      <div className="flex items-center">
        <span className="text-xl font-semibold text-whiteOpacity">Occupancy</span>
      </div>
      <div className="col-start-2">
        <span className="text-heading font-bold">{occupancy.count}</span>
        <span className="text-xxl font-semibold ml-2">in store</span>
      </div>
    </Panel>
  )
}
