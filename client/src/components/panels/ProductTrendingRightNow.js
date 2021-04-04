import { useEffect, useState } from 'react';

import { getProductsUnderperforming } from '../../api';
import TopPanel from '../TopPanel';

const ProductsTrendingRightNow = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductsUnderperforming()
      .then(res => setProduct(res.data[0]));
  }, [])

  if (!product) return <div></div>;

  return (
    <TopPanel icon="whatshot">
      <div className="font-bold text-xl text-blackOpacity">Trending <span className="text-sm font-semibold">- last hour</span></div>
      <div className="col-start-0 row-start-2 mt-2">
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <div className="text-heading font-bold text-black">
              {product.interactions}
              <span className="text-md font-semibold ml-3">interactions</span>
            </div>
          </div>
          <div className="text-md font-semibold text-blackOpacity mt-1">{product.name}</div>
        </div>
      </div>
    </TopPanel>
  )
};

export default ProductsTrendingRightNow;