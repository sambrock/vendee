import { DateTime } from "luxon";

const Header = () => (
  <header className="px-6 py-9 font-medium text-blackOpacity h-auto">
    <span className=" mr-6">{DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' })}</span>
    <span className="">{DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false })}</span>
  </header>
)

export default Header;
