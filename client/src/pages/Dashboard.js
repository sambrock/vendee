import styled from "styled-components";
import Occupancy from "../components/panels/Occupancy";
import Panel from "../components/Panel";
import ProductsList from "../components/panels/ProductsList";
import ProductsTrending from "../components/panels/ProductsTrending";
import ProductsUnderperforming from "../components/panels/ProductsUnderperforming";
import TrafficHours from "../components/panels/TrafficHours";

const StyledContainerDiv = styled.main`
  grid-template-rows: 9rem 400px;
`;

const Dashboard = () => {
  return (
    <StyledContainerDiv className="mx-6 grid grid-cols-4 grid-rows-4 gap-6">
      <div className="flex h-36 col-span-4">
        <Occupancy />
      </div>
      <Panel grid="col-span-2 row-start-2" title="Products">
        <ProductsList />
      </Panel>
      <Panel grid="col-span-2 row-start-2" title="Traffic by Hour">
        <TrafficHours />
      </Panel>
      <Panel grid="col-start-1 col-span-2 row-start-3" title="Products Trending">
        <ProductsTrending />
      </Panel>
      <Panel grid="col-start-3 col-span-2 row-start-3" title="Products Underperforming">
        <ProductsUnderperforming />
      </Panel>
    </StyledContainerDiv>
  )
}

export default Dashboard;
