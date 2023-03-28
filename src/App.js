import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import './App.css';
import JaromirJagr from './pages/JaromirJagr/JaromirJagr';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/jaromir-jagr", name: "Jaromir Jagr"},
    {url: "/barry-melrose", name: "Barry Melrose"},
    {url: "/guy-lafleur", name: "Guy Lafleur"},
    {url: "/paul-newman", name: "Paul Newman"}
  ])
  
  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path="/jaromir-jagr" element={<JaromirJagr />}/>
      </Routes>
    </>
  );
}

export default App;
