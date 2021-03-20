import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import svgPanZoom from 'svg-pan-zoom';

import FloorPlan from '../components/FloorPlan';

const StyledPageContainerDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StyledHeatMapBarDiv = styled.div`
  background: linear-gradient(90deg, rgb(249,191,194) 0%, rgb(237,66,73) 100%);
`;

const cams = 10;

const HeatMap = () => {
  const [avgTimes, setAvgTimes] = useState([]);

  const svgRef = useRef();

  useEffect(() => {
    axios('http://localhost:3001/api/traffic/heat-map')
      .then(res => setAvgTimes(res.data.sort((a,b) => a.times.seconds - b.times.seconds)));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const instance = svgPanZoom(svgRef.current).zoomOut(100);
    }, 1000)
  }, [svgRef])

  if(avgTimes.length === 0) return <div></div>;

  return (
    <StyledPageContainerDiv className="px-6 col-start-2 row-start-2 mb-6">
      <div className="w-full mb-6 h-14 flex items-center justify-between">
        <div className="text-heading font-bold text-black">Heat Map</div>
        <div className="grid grid-rows-2">
          <div className="row-start-1 flex justify-between mb-2">
            <span className="font-semibold text-blackOpacity text-xs">&lt;0:10</span>
            <span className="font-semibold text-blackOpacity text-xs">Average Standing Time</span>
            <span className="font-semibold text-blackOpacity text-xs">&gt;3:00</span>
          </div>
          <StyledHeatMapBarDiv className="row-start-2 h-full w-60 mx-3" />
        </div>
      </div>
      <div className="relative rounded-md bg-grey">
        <FloorPlan svgRef={svgRef} times={avgTimes} />
      </div>
    </StyledPageContainerDiv>
  )
};

export default HeatMap;
