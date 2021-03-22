import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';

const ProductsUnderperforming = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/api/products/underperforming')
      .then(res => setProducts(res.data.map(p => {
        return { id: p.productId, name: p.name, interactions: p.interactions.length }
      })))
  }, [])

  const columns = [
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'interactions', headerName: ' ', width: 50 },
  ];

  return (
    <div className="" style={{ height: '90%' }}>
      <DataGrid autoPageSize={true} hideFooterPagination={true} autoHeight={false} rows={products} columns={columns} pageSize={5} />
    </div>
  )
}

export default ProductsUnderperforming;
