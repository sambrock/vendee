import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import TopPanel from '../TopPanel';

const ProductsTrendingRightNow = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const interval = setInterval(async () => {
      const products = JSON.parse(localStorage.getItem('/api/products'));

      if (!products) return;
      const trending = products
        .sort((a, b) => b.interactionsHour - a.interactionsHour)
        .splice(0, 5); // Limit to 5

      setProduct(trending[0]);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  if (!product) return <div></div>;

  return (
    <TopPanel icon="whatshot">
      <div className="font-bold text-xl text-blackOpacity">Trending <span className="text-sm font-semibold">- Last hour</span></div>
      <div className="col-start-0 row-start-2 mt-2">
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <div className="text-heading font-bold text-black">
              {product.interactionsHour}
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