import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { getProducts } from '../../api';
import RetailerPriceTagList from '../RetailerPriceTagList';
import RetailerPriceMatchTag from '../RetailerPriceMatchTag';
import PriceInput from '../PriceInput';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data.map(p => {
        return { ...p, id: p.productId, interactions: p.interactions.length }
      }).sort((a, b) => a.id - b.id)));
  }, []);
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'interactions', headerName: 'Interactions', width: 130 },
    { field: 'price', headerName: 'Price', width: 100, renderCell: (p) => <PriceInput productId={p.row.id} price={p.value} /> },
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