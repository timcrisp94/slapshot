import { useState } from 'react';

import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/jaromir-jagr", name: "Jaromir Jagr"},
    {url: "/barry-melrose", name: "Barry Melrose"},
    {url: "/guy-lafleur", name: "Guy Lafleur"},
    {url: "/paul-newman", name: "Paul Newman"}
  ])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is our app</h1>
      </header>
    </div>
  );
}

export default App;
