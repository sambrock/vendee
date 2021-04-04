import styled from 'styled-components';

const StyledLegend = styled.div`
  background: ${props => props.theme.heatmapColors[props.color]};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  will-change: transform;
`;

const HeatMapHoverInfo = ({ x, y, data, isVisible }) => {
  return (
    <div className={`absolute rounded-md border-grey border border-solid ${isVisible ? '' : 'opacity-0'} smooth-hide`} style={{ transform: `translateX(${x}px) translateY(${y}px)` }}>
      <div className="p-2 bg-offwhite rounded-t-md border-b border-solid border-grey border-0">
        <span className="font-medium text-blackOpacity">Cam {data.camId}</span>
      </div>
      <div className="flex items-center p-2 bg-white opacity-90 rounded-b-md">
        <StyledLegend color={data.color} />
        <span className="ml-3 font-semibold">Dwell Time: {data.time}</span>
      </div>
    </div>
  )
}

export default HeatMapHoverInfo;
