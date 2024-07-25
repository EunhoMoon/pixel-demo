import React from 'react';
import './App.css';

const pixelArtData = [
  ['white', 'white', 'white', 'white', 'black', 'black', 'white', 'white', 'white', 'white'],
  ['white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black', 'white'],
  ['white', 'white', 'black', 'white', 'white', 'white', 'white', 'black', 'white', 'white'],
  ['white', 'white', 'black', 'white', 'white', 'white', 'white', 'black', 'white', 'white'],
  ['white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black', 'white'],
  ['white', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'black', 'white'],
  ['white', 'black', 'white', 'white', 'black', 'black', 'white', 'white', 'black', 'white'],
  ['white', 'white', 'black', 'white', 'white', 'white', 'white', 'black', 'white', 'white'],
  ['white', 'white', 'white', 'black', 'white', 'white', 'black', 'white', 'white', 'white'],
  ['white', 'black', 'black', 'white', 'black', 'black', 'white', 'black', 'black', 'white'],
];

function App() {
  return (
    <div className="App">
      <div className="pixel-art">
        {pixelArtData.flat().map((color, index) => (
          <div key={index} className={`pixel ${color}`}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
