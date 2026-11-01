import { useState } from 'react';
import './App.css';

import Context from './components/card/Context';
import Card from './components/card/Card';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <Context.Provider value={{ count, setCount }}>

        <h1 className="count">{count}</h1>

        <div className="app-container">

          <Card
            name="Balamurugan"
            email="bala@example.com"
            btnName="Btn1"
          />

          <Card
            name="Arun Kumar"
            email="arun@example.com"
            btnName="Btn2"
          />

          <Card
            name="Priya Sharma"
            email="priya@example.com"
            btnName="Btn3"
          />

        </div>

      </Context.Provider>
    </>
  );
}

export default App;