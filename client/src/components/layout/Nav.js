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
    { pathname: '/', icon: 'dashboard', label: 'Dashboard' },
    { pathname: '/traffic', icon: 'groups', label: 'Traffic' },
    { pathname: '/products', icon: 'sell', label: 'Products' },
    { pathname: '/heat-map', icon: 'whatshot', label: 'Heat Map' },
  ]

  return (
    <StyledNav className="fixed  row-span-2 h-screen w-60 text-blue">
      <div className="p-6 logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav flex flex-col pl-6">
        {links.map(link => <NavBtn to={link.pathname} materialIcon={link.icon} label={link.label} active={link.pathname === pathname} />)}
      </div>
    </StyledNav>
  )
}
