import './styles/index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Customers from './pages/Customers';
import HttpCats from './pages/HttpCat';
import RandomDog from './pages/RandomDog';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/customers" element={ <Customers /> } />
      <Route path="/http-cat" element={ <HttpCats /> } />
      <Route path="random-dog" element={ <RandomDog /> } />
    </Routes>
  );
}

export default App;
