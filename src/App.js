import { useState } from 'react';
import NavBar from './components/NavBar/NavBar'

import './App.css';

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
    </>
  );
}

export default App;
