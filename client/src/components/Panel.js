import styled from "styled-components";

const StyledTest = styled.div`
  display: grid;
  grid-template-columns: 70px 100%;
`;

const Panel = ({ width, bg, children }) => {
  return (
    <StyledTest className="p-3 rounded-sm bg-blue text-white">
      {children}
    </StyledTest>
  )
}

export default Panel;