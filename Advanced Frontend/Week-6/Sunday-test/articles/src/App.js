import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Comment } from './pages/Comment';
import Header from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/comment/:id" element={<Comment/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
