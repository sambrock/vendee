import { useEffect, useState } from 'react';
import axios from 'axios';

import TopPanel from '../TopPanel';
import PercentTag from '../PercentTag';

const ProductsTrendingRightNow = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    axios('http://localhost:3001/api/products/trending-right-now')
      .then(res => setProduct(res.data));
  }, [])

  console.log(product);

  if (!product) return <div></div>;

  return (
    <TopPanel icon="whatshot">
      <div className="font-bold text-xl text-blackOpacity">What's Hot?</div>
      <div className="col-start-0 row-start-2 mt-2">
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <div className="text-heading font-bold text-black">
              {product.details.interactions.length}
            </div>
            <PercentTag value={product.change} direction={product.direction} />
          </div>
          <div className="text-md font-semibold text-blackOpacity mt-1">{product.details.name}</div>
        </div>
      </div>
    </TopPanel>
  )
};

export default ProductsTrendingRightNow;