import React, { useEffect, useState } from 'react';

export const getTrendingProducts = (products) => {
  return products
    .sort((a, b) => b.interactionsToday - a.interactionsToday)
    .splice(0, 5); // Limit to 5
}

const ProductsTrending = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('/api/products')))

  useEffect(() => {
    const interval = setInterval(async () => {
      const products = JSON.parse(localStorage.getItem('/api/products'));

      if (!products) return;
      const trending = getTrendingProducts(products);

      setProducts(trending);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  if (!products) return <div></div>;

  return (
    <div style={{ height: '90%' }}>
      <div className="py-3 px-2 flex text-sm  table-border">
        <span className="font-semibold mr-auto text-blackOpacity">Name</span>
        <span className="ml-auto font-semibold text-blackOpacity">Interactions</span>
      </div>
      {products.map(p => (
        <div key={p.productId} className="py-3 px-2 flex justify-between text-sm table-border">
          <span>{p.name}</span>
          <span className="font-semibold">{p.interactionsToday}</span>
        </div>
      ))}
    </div>
  )
}

export default ProductsTrending;
