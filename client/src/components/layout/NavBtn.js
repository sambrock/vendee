const NavBtn = ({label, href, materialIcon, active}) => (
  <a href={href} className={`flex items-center px-3 py-3 mr-6 rounded-sm hover:bg-blackOpacity2 ${active ? 'text-blue bg-blueOpacity' : 'text-blackOpacity'}`}>
    <span className="material-icons-round pr-6">{materialIcon}</span>
    {label}
  </a>
);

export default NavBtn;