import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DateTime } from 'luxon';

import { apiRequest } from '../../api';

const DiscountList = () => {
  const [discounts, setDiscounts] = useState(JSON.parse(localStorage.getItem('/api/discounts')));

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      if (active) {
        apiRequest('/api/discounts')
          .then(res => setDiscounts(res.data))
          .catch(err => console.log(err));
      }
    }

    fetchData();
    return () => {
      active = false;
    }
  }, []);
  
  if (!discounts) return <div></div>;

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'code', headerName: 'Code', width: 200, renderCell: (p) => <span className="flex items-center p-1 bg-blackOpacity2 px-2 h-8 font-semibold rounded-md"><a className="text-black" href={`/d/${p.rowIndex + 1}`} rel="noreferrer" target="_blank">{p.value}</a></span> },
    {
      field: 'value', headerName: 'Amount', width: 120, renderCell: (p) => {
        if (p.value > 1) {
          return <span className="text-sm">{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(p.value)}</span>
        } else {
          return <span className="text-sm">{p.value * 100}%</span>
        }
      }
    },
    {
      field: 'starts', headerName: 'Status', width: 150, renderCell: (p) => {
        if (p.row.expires < Date.now()) return <span className="flex items-center p-1 text-red px-2 h-8 font-semibold rounded-md">Expired</span>
        if (p.row.starts < Date.now() && p.row.expires > Date.now()) return <span className="flex items-center p-1 text-green px-2 h-8 font-semibold rounded-md">Active</span>
        if (p.row.starts > Date.now()) return <span className="flex items-center p-1 text-blackOpacity px-2 h-8 font-semibold rounded-md">Scheduled</span>
      }
    },
    { field: 'created_at', headerName: 'Starts', width: 120, renderCell: (p) => <span className="text-sm">{DateTime.fromMillis(p.row.starts).toLocaleString(DateTime.DATE_MED)}</span> },
    { field: 'expires', headerName: 'Expires', width: 120, renderCell: (p) => <span className="text-sm">{DateTime.fromMillis(p.row.expires).toLocaleString(DateTime.DATE_MED)}</span> },
    {
      field: 'products', headerName: 'Products', width: 800, renderCell: (p) => {
        if (p.row.products.length === 0) return <span className="text-xxl">*</span>
        return <span>{p.row.products.map(p => p.name).join(', ')}</span>
      }
    },

  ];


  return (
    <DataGrid autoHeight={false} rows={discounts} columns={columns} pageSize={10} />
  )
}

export default DiscountList;