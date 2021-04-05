import { useEffect, useState } from 'react';

import { apiRequest } from '../../api';
import TopPanel from '../TopPanel';
import PercentTag from '../PercentTag';

const PriceMatch = () => {
  const [product, setProduct] = useState();
  const [cheaper, setCheaper] = useState(0);

  useEffect(() => {
    apiRequest('/api/products')
      .then(res => setProduct(res.data.sort((a, b) => a.change - b.change)[0]));
  }, []);

  useEffect(() => {
    if(!product) return;
    setCheaper(
      product.dynamicPricing.filter((p) => p.price !== undefined).sort((a,b) => a.price - b.price)[0]
    );
  }, [product])

  if (!product || !cheaper) return <div></div>

  return (
    <TopPanel icon="sell">
      <div className="font-bold text-xl text-blackOpacity">Price Match</div>
      <div className="col-start-0 row-start-2 mt-2">
        <div className="flex flex-col">
          <div className="grid grid-cols-3 grid-rows-2 items-baseline text-center">
          <div className="col-start-1 text-sm font-semibold">Our Price</div>
            <div className="col-start-3 text-sm font-semibold">{cheaper.retailer}</div>
            <div className="row-start-2 font-bold">{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(product.price)}</div>
            <div className="row-start-2 col-start-2 mx-1"><PercentTag value={product.change} direction={product.direction} /></div>
            <div className="row-start-2 font-bold">{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(cheaper.price)}</div>
          </div>
          <div className="text-md font-semibold text-blackOpacity mt-1">{product.name}</div>
        </div>
      </div>
    </TopPanel>
  )
}

export default PriceMatch;