import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

const Header = () => {
  const [date, setDate] = useState();
  
  useEffect(() => {
    const interval = setInterval(async () => {
      setDate(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  if(!date) return <div></div>;

  return (
    <header className="px-6 py-9 font-medium text-blackOpacity h-auto">
      <span className=" mr-6">{DateTime.fromMillis(date).toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' })}</span>
      <span className="">{DateTime.fromMillis(date).toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false })}</span>
    </header>
  )
}

export default Header;
