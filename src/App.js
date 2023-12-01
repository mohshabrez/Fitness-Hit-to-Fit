import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Dashboard } from './pages/Dashboard';
import { Exercises } from './pages/Exercises';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/exercises" element={<Exercises/>}/>
      </Routes>
    </div>
  );
}

export default App;
