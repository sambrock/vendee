import React from 'react';
import styled from 'styled-components';

const StyledPanelDiv = styled.div`
  display: grid;
  grid-template-rows: auto 100%;
`;

const Panel = ({ bg, grid, title, subtitle, children }) => {
  return (
    <StyledPanelDiv className={`p-6 rounded-md ${grid} ${!bg ? 'bg-white' : bg}`}>
      <div className="flex items-center">
        <div className="font-bold text-xl text-blackOpacity">{title} {subtitle ? <span className="text-sm font-semibold ml-1">- {subtitle}</span> : ''}</div>
      </div>
      {children}
    </StyledPanelDiv>
  )
}

export default Panel;