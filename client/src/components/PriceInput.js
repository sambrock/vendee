import React from 'react';
import { useState } from 'react';

import { apiRequest } from '../api';

const PriceInput = ({ productId, price }) => {
  const [value, setValue] = useState(price);

  const handleKeyUp = async (e) => {
    setValue(e.target.value);

    if (e.key === 'Enter') {
      const response = await apiRequest(`/api/products/update/${productId}`, 'put', { price: value })

      if (response) alert(`Price updated!`);
      setValue(new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(value))
    }
  }

  return <input title="priceInput" className="price-input h-full font-medium text-black" type="text" defaultValue={new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(value)} onKeyUp={(e) => handleKeyUp(e)} />
};

export default PriceInput;