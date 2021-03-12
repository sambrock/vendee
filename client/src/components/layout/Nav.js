import styled from 'styled-components'
import Logo from '../../images/logo.svg'
import NavBtn from './NavBtn';

export default function Nav() {
  const StyledNav = styled.nav`
    width: 320px;
    border-right: 0.125rem solid var(--grey);

    .logo {
      width: 14rem;
    }
  `;

  return (
    <StyledNav className="row-span-2 h-screen w-60 text-blue">
      <div className="p-6 logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col pl-6">
        <NavBtn href="http://google.com" materialIcon="dashboard" label="Dashboard" active={true}/>
        <div className="h-0.5 bg-grey mr-6 my-3" />
        <NavBtn href="http://google.com" materialIcon="category" label="Products" />
        <NavBtn href="http://google.com" materialIcon="groups" label="Customers" />
        <NavBtn href="http://google.com" materialIcon="social_distance" label="Occupancy" />
        <NavBtn href="http://google.com" materialIcon="directions_run" label="Shopper Flow" />
      </div>
    </StyledNav>
  )
}
