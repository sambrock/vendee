import React from 'react';
import styled from 'styled-components';

import Panel from '../components/Panel';
import Occupancy from '../components/panels/Occupancy';
import TrafficHours from '../components/panels/TrafficHours';
import TrafficWeek from '../components/panels/TrafficWeek';
import TrafficHighest from '../components/panels/TrafficHighest';

const StyledTrafficContainerDiv = styled.main`
  grid-template-rows: 9rem 400px;
`;

const Traffic = () => {
  return (
    <StyledTrafficContainerDiv className="mx-6 grid grid-cols-4 grid-rows-4 gap-6">
      <div className="flex h-36 col-span-4">
        <Occupancy />
        <TrafficHighest />
      </div>
      <Panel grid="col-span-2 row-start-2" title="Traffic by Hour">
        <TrafficHours />
      </Panel>
      <Panel grid="col-span-2 row-start-2" title="Traffic by Week">
        <TrafficWeek />
      </Panel>
    </StyledTrafficContainerDiv>
  )
};

export default Traffic;
