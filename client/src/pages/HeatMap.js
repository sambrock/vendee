import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { apiRequest } from '../api';
import FloorPlan from '../components/FloorPlan';

const StyledPageContainerDiv = styled.div`
  display: grid;
  height: calc(100vh - 130px);
  grid-template-rows: auto 1fr;
`;

const StyledHeatMapBarDiv = styled.div`
  background: linear-gradient(90deg, rgb(249,191,194) 0%, rgb(237,66,73) 100%);
`;

const HeatMap = () => {
  const [dwellTimes, setDwellTimes] = useState(JSON.parse(localStorage.getItem('/api/traffic/dwell-time')));

  useEffect(() => {
    apiRequest('/api/traffic/dwell-time')
      .then(res => setDwellTimes(res.data));
  }, [])

  return (
    <StyledPageContainerDiv className="px-6 col-start-2 row-start-2 mb-6">
      <div className="w-full mb-6 h-14 flex items-center justify-between">
        <div className="text-heading font-bold text-black">Dwell Time</div>
        <div className="grid grid-rows-2">
          <div className="row-start-1 flex justify-between mb-2">
            <span className="font-semibold text-blackOpacity text-xs">&lt;0:10</span>
            <span className="font-semibold text-blackOpacity text-xs">Dwell Time</span>
            <span className="font-semibold text-blackOpacity text-xs">&gt;3:00</span>
          </div>
          <StyledHeatMapBarDiv className="row-start-2 h-full w-60 mx-3" />
        </div>
      </div>
      <div className="relative rounded-md bg-grey">
        {dwellTimes.length > 0 &&
          <FloorPlan times={dwellTimes} />
        }
      </div>
    </StyledPageContainerDiv>
  )
};

export default HeatMap;
