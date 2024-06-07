import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Restaurant Menu</h1>
        <p>
          <a
            href={`${process.env.PUBLIC_URL}/menu.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            View Our Menu
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;