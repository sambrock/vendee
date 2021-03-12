import styled from "styled-components";
import Occupancy from "./Occupancy"

const StyledTopPanelsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  grid-gap: 1.5rem;
`;

const Panels = () => {
  return (
    <main className="px-6 col-start-2 row-start-2">
      <StyledTopPanelsDiv>
        <Occupancy />
      </StyledTopPanelsDiv>
    </main>
  )
}

export default Panels;
