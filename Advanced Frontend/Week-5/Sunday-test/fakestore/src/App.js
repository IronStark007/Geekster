import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Carts } from './pages/Cart';
import { Home } from './pages/Home';

function App() {

  return (
<>
<NavBar/>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/carts" element={<Carts/>}/>
</Routes>

<Footer/>
</>
  );
}

export default App;
