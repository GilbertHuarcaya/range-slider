/* eslint-disable no-alert */
import React, { useState } from 'react';
import './App.scss';

function App() {
  const [value, setValue] = useState(16);

  return (
    <div className="wrapper">
      <div className="amount">
        <sup>$</sup>
        <span className="dollars">
          {value.toFixed(2)}
        </span>
      </div>
      <input type="range" id="priceRange" min={0} max={10000} step={1} defaultValue={5000} onChange={(e) => (setValue(e.target.value * 0.0032))} />
      <br />
      <button type="button" onClick={() => alert(value.toFixed(2))}>Buy Now</button>
    </div>

  );
}

export default App;
