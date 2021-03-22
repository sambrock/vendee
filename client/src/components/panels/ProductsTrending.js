import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';

const ProductsTrending = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/api/products/trending')
      .then(res => setProducts(res.data.map(p => {
        return { id: p.productId, name: p.name, price: new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(p.price), interactions: p.interactions.length }
      }).sort((a, b) => a.id - b.id)));
  }, [])

  const columns = [
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'interactions', headerName: ' ', width: 50 },
  ];

  return (
    <div style={{ height: '90%' }}>
      <DataGrid autoPageSize={true} hideFooterPagination={true} autoHeight={false} rows={products} columns={columns} pageSize={5} />
    </div>
  )
}

export default ProductsTrending;
