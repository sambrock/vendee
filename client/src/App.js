import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Dashboard from './pages/Dashboard';
import Traffic from './pages/Traffic';
import HeatMap from './pages/HeatMap';
import Products from './pages/Products';

import GlobalStyle from './styles/GlobalStyles';
import './styles/tailwind.css';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav />
          <div className="page-container">
            <Header />
            <Switch>
              <Route path="/dwell-time" component={HeatMap} />
              <Route path="/products" component={Products} />
              <Route path="/traffic" component={Traffic} />
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
