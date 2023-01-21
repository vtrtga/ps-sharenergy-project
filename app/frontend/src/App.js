import './styles/index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Customers from './pages/Customers';
import HttpCats from './pages/HttpCat';
import RandomDog from './pages/RandomDog';
import './styles/reset.css';

function App() {
  return (
    <div className="App bg-clip-content bg-gradient-to-t from-slate-300 h-full w-full">
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/customers" element={ <Customers /> } />
        <Route path="/http-cat" element={ <HttpCats /> } />
        <Route path="random-dog" element={ <RandomDog /> } />
      </Routes>
    </div>
  );
}

export default App;
