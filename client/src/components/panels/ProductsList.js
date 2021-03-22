import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';

import RetailerPriceTagList from '../RetailerPriceTagList';
import RetailerPriceMatchTag from '../RetailerPriceMatchTag';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/api/products')
      .then(res => setProducts(res.data.map(p => {
        return { id: p.productId, name: p.name, price: p.price, interactions: p.interactions.length, dynamicPricing: p.dynamicPricing, change: p.change, direction: p.direction }
      }).sort((a, b) => a.id - b.id)));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'interactions', headerName: 'Interactions', width: 130 },
    { field: 'price', headerName: 'Price', width: 100, renderCell: (p) => <span>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(p.value)}</span> },
    {
      field: 'change',
      headerName: 'Price Matched?',
      renderCell: (p) => <RetailerPriceMatchTag change={p.row.change} direction={p.row.direction} />,
      width: 140
    },
    {
      field: 'dynamicPricing',
      headerName: 'Other Retailer Prices',
      renderCell: (p) => <RetailerPriceTagList price={p.row.price} dynamicPricing={p.row.dynamicPricing} />,
      width: 350
    },
  ];

  if (!products) return <div></div>;

  return (
    <div className="" style={{ height: '90%' }}>
      <DataGrid autoHeight={false} rows={products} columns={columns} pageSize={8} />
    </div>
  )
};

export default ProductsList;