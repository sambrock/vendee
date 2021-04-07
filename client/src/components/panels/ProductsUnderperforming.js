import { useEffect, useState } from 'react';

const ProductsUnderperforming = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const products = JSON.parse(localStorage.getItem('/api/products'));

      if (!products) return;
      const underperforming = products
        .sort((a, b) => a.interactionsToday - b.interactionsToday)
        .splice(0, 5); // Limit to 5

        setProducts(underperforming);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="" style={{ height: '90%' }}>
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

export default ProductsUnderperforming;
