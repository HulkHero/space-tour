import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
function App() {
  return (
    <Router>
      <NavBar ></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/destination" element={<Destination></Destination>}></Route>
        <Route path="/crew" element={<Crew></Crew>}></Route>
        <Route path="/technology" element={<Technology></Technology>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
