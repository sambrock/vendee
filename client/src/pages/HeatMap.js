import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import ClipLoader from "react-spinners/ClipLoader";

import { apiRequest } from '../api';
import FloorPlan from '../components/FloorPlan';
import { TextField } from '@material-ui/core';

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
  const [date, setDate] = useState(DateTime.local().toISODate());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      if (active) {
        apiRequest(`/api/traffic/dwell-time`)
          .then(res => {
            setDwellTimes(res.data);
            setLoading(false);
          });
      }
    }

    fetchData();
    return () => {
      active = false;
    }
  }, [])


  const handleSearch = () => {
    if (!date || DateTime.fromISO(date).toMillis() > Date.now()) {
      return setDate(DateTime.local().toISODate());
    };

    setLoading(true);

    apiRequest(`/api/traffic/dwell-time?date=${date}`)
      .then(res => {
        setDwellTimes(res.data);
        setLoading(false);
      })
      .catch(err => {
        setDwellTimes(JSON.parse(localStorage.getItem('/api/traffic/dwell-time')));
        setDate(DateTime.local().toISODate());
      })
      ;
  };

  return (
    <StyledPageContainerDiv className="px-6 col-start-2 row-start-2 mb-6">
      <div className="w-full mb-6 h-14 flex items-center justify-between">
        <div className="text-heading font-bold text-black">Dwell Time</div>
        <div className="mr-auto ml-12 flex items-center">
          <TextField
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button className="search-btn" onMouseDown={() => handleSearch()}>Apply</button>
        </div>
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
        {!loading ?
          <FloorPlan times={dwellTimes} /> :
          <div className="loading mt-6 flex w-full border items-center h-full justify-center text-blue"><ClipLoader color='#fffff' size={50} /></div>
        }
      </div>
    </StyledPageContainerDiv>
  )
};

export default HeatMap;
