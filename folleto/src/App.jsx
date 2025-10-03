import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SaberMas from './pages/SaberMas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SaberMas" element={<SaberMas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;