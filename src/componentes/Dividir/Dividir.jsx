import React, { useState } from 'react';

const Dividir = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const dividirValores = () => {
    setResultado(Number(num1) / Number(num2));
  };

  return (
    <div className="container">
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="0" 
      />
      <span> / </span>
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="0" 
      />
      <button onClick={dividirValores}>Dividir</button>
      <span> = {resultado}</span>
    </div>
  );
};

export default Dividir;