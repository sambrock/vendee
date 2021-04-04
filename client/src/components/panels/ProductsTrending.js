import { useEffect, useState } from 'react';

import { getProductsTrending } from '../../api';

const ProductsTrending = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsTrending()
      .then(res => setProducts(res.data));
  }, [])

  return (
    <div style={{ height: '90%' }}>
      <div className="py-3 px-2 flex text-sm  table-border">
          <span className="font-semibold mr-auto text-blackOpacity">Name</span>
          <span className="ml-auto font-semibold text-blackOpacity">Interactions</span>
        </div>
      {products.map(p => (
        <div className="py-3 px-2 flex justify-between text-sm table-border">
          <span>{p.name}</span>
          <span className="font-semibold">{p.interactions}</span>
        </div>
      ))}
    </div>
  )
}

export default ProductsTrending;
