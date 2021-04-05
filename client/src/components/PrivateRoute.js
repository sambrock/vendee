import { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path, exact }) => {
  const [authed, setAuthed] = useState(localStorage.getItem('x-auth-token') ? true : false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const token = localStorage.getItem('x-auth-token');
      token ? setAuthed(true) : setAuthed(false);
    }, 100);
    return () => clearInterval(interval);
  }, [])

  return (
    <Route render={() => (
      authed ?
        <Component exact={exact} path={path}/>
        : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;