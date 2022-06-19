import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <NavigationBar/>
    <Routes>
    <Route to="/" element={<Home/>}/>
    <Route to="/profile/:url" element={<Profie/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
