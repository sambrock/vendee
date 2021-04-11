import styled from 'styled-components';
import DiscountList from '../components/panels/DiscountList';
import Occupancy from '../components/panels/Occupancy';
import Panel from '../components/Panel';

const StyledDiscountstsContainerDiv = styled.main`
  grid-template-rows: 9rem calc(100vh - 9rem - 200px);
`;

const Discounts = () => {  
  return (
    <StyledDiscountstsContainerDiv className="mx-6 grid grid-cols-4 grid-rows-4 gap-6 mb-6">
      <div className="flex h-36 col-span-4">
        <Occupancy />
      </div>
      <Panel grid="col-span-4 row-start-2 row-span-2" title="Discounts">
        <DiscountList />
      </Panel>
    </StyledDiscountstsContainerDiv>
  )
};

export default Discounts;
