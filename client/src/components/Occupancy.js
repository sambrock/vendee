import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Occupancy() {
  const [occupancy, setOccupancy] = useState();
  
  useEffect(() => {
    const interval = setInterval(async() => {
      const result = await axios(
        'http://localhost:3001/api/occupancy/',
      );
   
      setOccupancy(result.data);
    }, 1000);
    return () => clearInterval(interval);
  })

  if(!occupancy) return <div></div>;

  return (
    <div>
      <span>Live occupancy:</span>
      <span>{occupancy.count}</span>
    </div>
  )
}
