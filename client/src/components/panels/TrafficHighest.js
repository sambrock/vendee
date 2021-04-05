import { useEffect, useState } from 'react';

import { apiRequest } from '../../api';
import TopPanel from '../TopPanel';
import PercentTag from '../PercentTag';

const TrafficHighest = () => {
  const [traffic, setTraffic] = useState([]);

  useEffect(() => {
    apiRequest('/api/traffic/today')
      .then(res => setTraffic(res.data));
  }, [])

  if (!traffic) return <div>test</div>;

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
