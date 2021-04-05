import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

const Header = ({ color }) => {
  const [date, setDate] = useState();

  useEffect(() => {
    const interval = setInterval(async () => {
      setDate(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <header className={`${color ? color : 'text-blackOpacity'} px-6 py-10 font-medium h-auto`}>
      {date ?
        <div>
          <span className=" mr-6">{DateTime.fromMillis(date).toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' })}</span>
          <span className="">{DateTime.fromMillis(date).toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false })}</span>
        </div>
      :
        <div>
          <div className="h-6 w-44" />
        </div>
      }
    </header>
  )
}

export default Header;
