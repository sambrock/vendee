import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Panels from './components/Panels';

import GlobalStyle from './styles/GlobalStyles';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <Panels />
    </div>
  );
}

export default App;
