import { useState } from 'react';

const Contador = () => {
 
  const [contador, setContador] = useState(0);

  
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button 
        onClick={decrementar} 
        style={{
          backgroundColor: 'greey', 
          color: 'black', 
          padding: '30px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          border: '1px solid black'
        }}
      >
        -1
      </button>

      <span style={{ fontSize: '20px' }}>{contador}</span> {}

      <button 
        onClick={incrementar} 
        style={{
          backgroundColor: 'greey', 
          color: 'black', 
          padding: '30px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          border: '1px solid black'
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Contador;
