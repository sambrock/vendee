import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Dashboard from './pages/Dashboard';
import Traffic from './pages/Traffic';
import HeatMap from './pages/HeatMap';
import Products from './pages/Products';

import './styles/tailwind.css';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import Login from './pages/Login';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('x-auth-token') ? true : false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const token = localStorage.getItem('x-auth-token');
      token ? setAuth(true) : setAuth(false);
    }, 100);
    return () => clearInterval(interval);
  }, [])


  return (
    <div className="App">
      {!auth ?
        <div className="login-container">
          <Login />
        </div> :
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav />
            <div className="page-container">
              <Header />
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dwell-time" component={HeatMap} />
                <Route path="/products" component={Products} />
                <Route path="/traffic" component={Traffic} />
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </ThemeProvider>
        </Router>
      }
    </div>
  );
}

export default App;
