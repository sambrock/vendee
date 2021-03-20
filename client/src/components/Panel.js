import styled from 'styled-components';

const StyledPanelDiv = styled.div`
  display: grid;
  grid-template-rows: auto 100%;
  /* height: auto; */
`;

const Panel = ({ bg, grid, title, children }) => {
  return (
    <StyledPanelDiv className={`p-6 rounded-md ${grid} ${!bg ? 'bg-white' : bg}`}>
      <div className="text-blackOpacity font-bold text-xl mb-3">{title}</div>
      {children}
    </StyledPanelDiv>
  )
}

export default Panel;