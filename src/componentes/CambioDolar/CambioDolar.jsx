import React, { useState } from 'react';

const CambioDolar = () => {
  const [reais, alterarValorReais] = useState(0);
  const [dolares, alterarValorDolares] = useState(0);
  const taxaDeCambio = 5.00; 

  const converteReais = (e) => {
    const valorReais = e.target.value;
    alterarValorReais(valorReais);
    alterarValorDolares((valorReais / taxaDeCambio).toFixed(2));
  };

  const converteDolares = (e) => {
    const valorDolares = e.target.value;
    alterarValorDolares(valorDolares);
    alterarValorReais((valorDolares * taxaDeCambio).toFixed(2));
  };

  return (
    <div>
      <input 
        type="number" 
        value={reais} 
        onChange={converteReais}   
        placeholder="Reais"
      /> 
      <span style={{ color: 'black', fontSize: '30px' }}>reais é igual a</span>
      <input 
        type="number" 
        value={dolares} 
        onChange={converteDolares} 
        placeholder="Dólares"
      /> <span style={{ color: 'black', fontSize: '30px' }}>Dolares</span>
    </div>
  );
};

export default CambioDolar;

