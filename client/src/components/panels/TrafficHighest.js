import { useEffect, useState } from 'react';
import axios from 'axios';

import TopPanel from '../TopPanel';
import PercentTag from '../PercentTag';

const TrafficHighest = () => {
  const [traffic, setTraffic] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/api/traffic/today')
      .then(res => setTraffic(res.data));
  }, [])

  // console.log(traffic);

  // if (!traffic) <div>test</div>

  return (
    <TopPanel icon="groups">
      <div className="font-bold text-xl text-blackOpacity">Today's Highest</div>
      <div className="col-start-0 row-start-2 mt-2 flex items-baseline">
        <div className="text-main font-bold text-black">{traffic.count}</div>
        <PercentTag value={traffic.change} direction={traffic.direction} />
      </div>
    </TopPanel>
  )
}

export default TrafficHighest;