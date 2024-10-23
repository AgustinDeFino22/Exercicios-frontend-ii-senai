import React, { useState } from 'react';

const CambioEuro = () => {
  const [reais, alterarValorReais] = useState(0);
  const [Euros, alterarValorEuros] = useState(0);
  const taxaDeCambio = 5.50; 

  const converteReais = (e) => {
    const valorReais = e.target.value;
    alterarValorReais(valorReais);
    alterarValorEuros((valorReais / taxaDeCambio).toFixed(2));
  };

  const converteEuros = (e) => {
    const valorEuros = e.target.value;
    alterarValorEuros(valorEuros);
    alterarValorReais((valorEuros * taxaDeCambio).toFixed(2));
  };

  return (
    <div>
      <input 
        type="number" 
        value={reais} 
        onChange={converteReais}   
        placeholder="Reais"
      /> 
      <span style={{ color: 'black', fontSize: '30px' }}>Reais é igual a</span>
      <input 
        type="number" 
        value={Euros} 
        onChange={converteEuros} 
        placeholder="Euros"
      /> <span style={{ color: 'black', fontSize: '30px' }}>Euros</span>
    </div>
  );
};

export default CambioEuro;