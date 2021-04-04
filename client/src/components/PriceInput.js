import { useState } from 'react';
import axios from 'axios';

const PriceInput = ({ productId, price }) => {
  const [value, setValue] = useState(price);

  const handleKeyUp = (e) => {
    setValue(e.target.value);

    if (e.key === 'Enter') {
      axios({ method: 'put', url: `http://localhost:3001/api/products/update/${productId}`, data: { price: value } }).then(() => alert(`Price updated!`));
      setValue(new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(value))
    }
  }

  return <input className="h-full text-sm" type="text" defaultValue={new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(value)}  onKeyUp={(e) => handleKeyUp(e)} />
};

export default PriceInput;