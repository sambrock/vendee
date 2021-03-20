import styled from 'styled-components';
import tw from 'twin.macro';

const StyledChangeDiv = styled.div`
  ${tw`font-bold ml-3`}
  color: ${props => props.theme.changeColors[props.direction]};
`;

const PercentTag = ({ value, direction }) => (
  <StyledChangeDiv direction={direction === 1 ? 1 : 2}>
  {direction === 1 ? '+' : ''}{value}%
  </StyledChangeDiv>
)


export default PercentTag;