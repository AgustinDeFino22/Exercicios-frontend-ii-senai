import { useState } from 'react';

const BotaoContador = () => {
  // Hook de estado para o contador
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <button
      onClick={incrementarContador}
      style={{
        backgroundColor: 'greey',
        color: 'black',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        border: '1px solid black',
      }}
    >
      Contador é: {contador}
    </button>
  );
};

export default BotaoContador;

