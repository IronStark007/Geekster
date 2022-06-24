import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import {Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Detail } from './pages/Detail';

function App() {
  return (
    <>
    <NavigationBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/profile/:id" element={<Profile/>}/>
    <Route path="/post/:id" element={<Detail/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
