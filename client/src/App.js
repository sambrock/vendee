import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';
import Traffic from './pages/Traffic';
import HeatMap from './pages/HeatMap';
import Products from './pages/Products';

import './styles/tailwind.css';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route path="/login" component={Login} />
            <Page>
              <Switch>
                <PrivateRoute path="/dwell-time" component={HeatMap} />
                <PrivateRoute path="/products" component={Products} />
                <PrivateRoute path="/traffic" component={Traffic} />
                <PrivateRoute exact={true} path="/" component={Dashboard} />
              </Switch>
            </Page>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
