import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

import { apiRequest } from '../api';
import Logo from '../images/logo.svg'

const Discount = ({ match }) => {
  const [discount, setDiscount] = useState();

  const id = match.params.id;

  useEffect(() => {
    apiRequest(`/api/discounts`)
      .then(res => setDiscount(res.data[id - 1]))
      .catch(err => console.log(err));
  }, [id])

  if (!discount) return <div></div>
  if(discount && discount.expires < Date.now()) return <div>Expired</div>
  if(discount && discount.starts > Date.now()) return <div>Scheduled.</div>

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col h-2/3 p-6 justify-center items-center">
        <h1 className="text-center mb-1">{discount.name}</h1>
        <h2 className="text-center">{discount.code}</h2>
        <div className="w-1/2">
          <span className="font-semibold">Products:</span>
          <div className="w-text-center">{discount.products.length > 0 ? discount.products.map(p => p.name).join(', ') : 'All'}</div>
        </div>
        <div className="px-12 mt-12 w-full items-center">
          <QRCode value={window.location.href} />
        </div>
        <div className="flex items-center justify-center mt-auto">
          <span className="font-medium text-sm">Powered by</span><img className="w-12 ml-2" src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Discount;