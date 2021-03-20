import { Link } from "react-router-dom";

const NavBtn = ({label, to, materialIcon, active}) => (
  <Link to={to} className={`flex items-center px-3 py-3 mr-6 rounded-sm ${active ? 'text-blue bg-blueOpacity' : 'text-blackOpacity'} ${!active ? 'hover:bg-blackOpacity2' : ''}`}>
    <span className="material-icons-round pr-6">{materialIcon}</span>
    {label}
  </Link>
);

export default NavBtn;