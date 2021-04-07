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

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col h-2/3 p-6">
        <h1 className="text-center mb-1">{discount.name}</h1>
        <h2 className="text-center">{discount.code}</h2>
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