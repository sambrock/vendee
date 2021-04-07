import styled from 'styled-components';

import RetailerIcons from './retailer-icons';

const StyledRetailerTagDiv = styled.div`
  border: 1px solid var(--black-opacity-2);
`;

const RetailerPriceTagList = ({ dynamicPricing }) => {
  if (!dynamicPricing) return <div></div>;

  return (
    <div className="flex items-center">
      {dynamicPricing.map(dp => (
        <StyledRetailerTagDiv key={dp.retailer} className="mr-3 px-2 rounded-md flex items-center h-8">
          <a href={dp.url} target="_blank" rel="noreferrer" className="dec">
            <RetailerIcons retailer={dp.retailer} />
            <span className="ml-3 text-xs text-blackOpacity">{dp.price ? new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(dp.price) : 'N/A'}</span>
          </a>
        </StyledRetailerTagDiv>
      ))}
    </div>
  )
}


export default RetailerPriceTagList;