import { useLocation } from 'react-router';
import styled from 'styled-components'

import NavBtn from './NavBtn';
import Logo from '../../images/logo.svg'

const StyledNav = styled.nav`
  width: 320px;
  border-right: 0.125rem solid var(--grey);

  .logo {
    width: 14rem;
  }
`;

export default function Nav() {
  let { pathname } = useLocation();

  const links = [
    { pathname: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { pathname: '/traffic', icon: 'groups', label: 'Traffic' },
    { pathname: '/products', icon: 'category', label: 'Products' },
    { pathname: '/discounts', icon: 'sell', label: 'Discounts' },
    { pathname: '/dwell-time', icon: 'whatshot', label: 'Dwell Time' },
  ]

  return (
    <StyledNav className="fixed flex flex-col row-span-2 h-screen w-60 text-blue">
      <div className="p-6 logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav flex flex-col pl-6">
        {links.map((link, i) => <NavBtn key={i} to={link.pathname} materialIcon={link.icon} label={link.label} active={link.pathname === pathname} />)}
      </div>
      <div className="mt-auto flex flex-col pl-6 pb-6">
        <div className="select-none mt-auto text-blackOpacity flex items-center px-3 py-3 mr-6 rounded-sm font-semibold hover:bg-blackOpacity2 cursor-pointer" onMouseDown={() => localStorage.removeItem('x-auth-token')}>
          <span className="font-semibold material-icons-round pr-6">logout</span>
          Exit
        </div>
      </div>
    </StyledNav>
  )
}
