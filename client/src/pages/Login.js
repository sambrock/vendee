import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { getAuthToken } from '../api';
import Header from '../components/layout/Header';
import Logo from '../images/logo-w.svg'

const StyledLoginPage = styled.div`
  display: grid;
  height: calc(100vh);
  grid-template-rows: 5fr 1fr;
  width: 100vw;
`;

const StyledLoginInput = styled.input`
  width: 400px;

  &:focus {
    background: var(--off-white);
  }
`;

const Login = () => {
  const [authed, setAuthed] = useState(localStorage.getItem('x-auth-token') ? true : false);
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const token = localStorage.getItem('x-auth-token');
      token ? setAuthed(true) : setAuthed(false);
    }, 100);
    return () => clearInterval(interval);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) return;

    const token = await getAuthToken(password);
    if (!token) return setFailed(true);

    return localStorage.setItem('x-auth-token', token);
  }

  if (authed) return <Redirect to="/dashboard" />

  return (
    <div className="bg-blue">
      <div className="fixed text-white">
        <Header color='text-offwhite' />
      </div>
      <StyledLoginPage className="justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="flex justify-center items-center text-grey font-semibold text-heading pb-6">Enter password</h1>
          <form className={`flex justify rounded-lg ${failed ? 'border-red' : 'default-border-input'}`} action="" onSubmit={(e) => handleSubmit(e)}>
            <StyledLoginInput className="flex items-center text-xxl text-blackOpacity bg-offwhite pt-4 pb-5 px-6 rounded-l-md" type="password" onKeyUp={(e) => setPassword(e.target.value)} />
            <button type="submit" className="bg-offwhite text-blue rounded-r-md px-6 focus:bg-offwhite"><span className={`material-icons-round text-heading font-medium ${failed ? 'text-red' : ''}`}>login</span></button>
          </form>
        </div>
        <div className="flex justify-center p-6 logo">
          <img src={Logo} alt="Logo" className="w-60" />
        </div>
      </StyledLoginPage>
    </div>
  )
}

export default Login;