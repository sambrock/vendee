import { Modal } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import PriceInput from "./PriceInput";

const ShelfStockModal = ({ modalData }) => {
  const [open, setOpen] = useState(true);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    setOpen(modalData.open);
    setStock(modalData.stock);
  }, [modalData])

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 450 },
    { field: 'interactions', headerName: 'Interactions', width: 150 },
    { field: 'price', headerName: 'Price', width: 100, renderCell: (p) => <PriceInput productId={p.row.id} price={p.value} /> },
    { field: 'stock', headerName: 'Stock', width: 110, renderCell: (p) => (
      <div className="flex items-center font-medium">
        <div className={`${p.value <= 0 ? 'text-red' : ''}`}>{p.value}</div>
        <div>{p.value <= 0 ? <span className="material-icons text-lg ml-2 text-red">production_quantity_limits</span> : ''}</div>
      </div>
    ) },
  ];

  return (
    <Modal open={open} onClose={handleClose} >
      <div className="w-2/4 bg-white rounded-md inset-center border-grey border border-solid outline-none">
        <div className="flex justify-between p-3 bg-offwhite rounded-t-md border-b border-solid border-grey border-0 text-blackOpacity font-medium">
          <span>Shelf {modalData.shelf}</span>
          <span className="material-icons cursor-pointer" onClick={handleClose}>clear</span>
        </div>
        <div className="px-3 pt-3">
          <DataGrid autoHeight={true} rows={stock} columns={columns} hideFooterPagination={true} />
        </div>
      </div>
    </Modal>
  )
}

export default ShelfStockModal;