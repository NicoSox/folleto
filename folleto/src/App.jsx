import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SaberMas from './pages/SaberMas';
import Civil from './pages/Civil';
import Energia from './pages/Energia';
import Mecanica from './pages/Mecanica';
import Electronica from './pages/Electronica';
import IntroUTN from './pages/IntroUTN';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SaberMas" element={<SaberMas />} />
        <Route path="/Civil" element={<Civil />} />
        <Route path="/Energia" element={<Energia />} />
        <Route path="Mecanica" element={<Mecanica />} />
        <Route path="Electronica" element={<Electronica />} />  
        <Route path="Home" element={<IntroUTN/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;