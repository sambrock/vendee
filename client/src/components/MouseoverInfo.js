import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledLegend = styled.div`
  background: ${props => props.theme.heatmapColors[props.color]};
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;

const MouseoverInfo = ({ x, y, data, isVisible }) => {
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   if(isVisible === true) return setVisible(true);

  //   setTimeout(() => {
  //     setVisible(isVisible);
  //   }, 100)
  // }, [isVisible])

  return (
    <div className={`absolute rounded-md border-grey border border-solid ${isVisible ? '' : 'opacity-0'} smooth-hide`} style={{ transform: `translateX(${x}px) translateY(${y}px)` }}>
      <div className="p-2 bg-offwhite rounded-t-md border-b border-solid border-grey border-0">
        <span className="font-medium text-blackOpacity">Cam {data.camId}</span>
        
      </div>
      <div className="flex items-center p-2 bg-white opacity-90 rounded-b-md">
        <StyledLegend color={data.color} />
        <span className="ml-3 font-semibold">{data.time}</span>
        {/* <span className="ml-3 font-semibold opacity-100 text-xs">Avg. Standing Time</span> */}
      </div>
    </div>
  )
}

export default MouseoverInfo;
