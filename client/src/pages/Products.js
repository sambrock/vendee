import styled from 'styled-components';

import Panel from '../components/Panel';
import PriceMatch from '../components/panels/PriceMatch';
import ProductsList from '../components/panels/ProductsList';
import ProductsTrending from '../components/panels/ProductsTrending';
import ProductsUnderperforming from '../components/panels/ProductsUnderperforming';
import ProductsTrendingRightNow from '../components/panels/ProductTrendingRightNow';
import ProductUnderperforming from '../components/panels/ProductUnderperforming';
import Occupancy from "../components/Occupancy";
import Page from '../components/Page';

const StyledProductsContainerDiv = styled.main`
  grid-template-rows: 9rem 1fr 1fr;
`;

const Products = () => {
  return (
      <StyledProductsContainerDiv className="mx-6 grid grid-cols-4 grid-rows-4 gap-6 mb-6">
        <div className="flex h-36 col-span-4">
          <Occupancy />
          <ProductsTrendingRightNow />
          <ProductUnderperforming />
          <PriceMatch />
        </div>
        <Panel grid="col-span-3 row-start-2 row-span-2" title="Products">
          <ProductsList />
        </Panel>
        <Panel grid="col-start-4 row-start-2" title="Trending" subtitle="Today">
          <ProductsTrending />
        </Panel>
        <Panel grid="col-start-4 row-start-3" title="Underperforming" subtitle="Today">
          <ProductsUnderperforming />
        </Panel>
      </StyledProductsContainerDiv>
  )
};

export default Products;
