import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { apiRequest } from '../../api';
import RetailerPriceTagList from '../RetailerPriceTagList';
import RetailerPriceMatchTag from '../RetailerPriceMatchTag';
import PriceInput from '../PriceInput';

const ProductsList = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('/api/products')));

  useEffect(() => {
    apiRequest('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'interactions', headerName: 'Interactions', width: 140, renderCell: (p) => <span>{new Intl.NumberFormat('en-EN').format(p.value)}</span> },
    { field: 'price', headerName: 'Price', width: 100, renderCell: (p) => <PriceInput productId={p.row.id} price={p.value} /> },
    { field: 'change', headerName: 'Price Matched?', width: 170, renderCell: (p) => <RetailerPriceMatchTag change={p.row.change} direction={p.row.direction} />, },
    { field: 'dynamicPricing', headerName: 'Competitor Prices', renderCell: (p) => <RetailerPriceTagList price={p.row.price} dynamicPricing={p.row.dynamicPricing} />, width: 350 },
  ];

  if (!products) return <div></div>;

  return (
    <div className="" style={{ height: '90%' }}>
      <DataGrid autoHeight={false} rows={products} columns={columns} pageSize={8} />
    </div>
  )
};

export default ProductsList;