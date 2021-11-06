import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ListTracksPage } from './pages/ListTracksPage';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/list-tracks' element={<ListTracksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
