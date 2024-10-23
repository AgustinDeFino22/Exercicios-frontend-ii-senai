import BotaoContador from "./componentes/BotaoContador/BotaoContador";
import Contador from "./componentes/Contador/contador";
import Somar from "./componentes/Somar/Somar";
import Diminuir from "./componentes/Diminuir/Diminuir";
import Multiplicar from "./componentes/Multiplicar/Multiplicar";
import Dividir from "./componentes/Dividir/Dividir";
import CambioDolar from "./componentes/CambioDolar/CambioDolar";
import CambioEuro from "./componentes/CambioEuro/CambioEuro";
import CalculoIMC from "./componentes/CalculoIMC/CalculoIMC";
import AdicionarNome from "./componentes/AdicionarNome/AdicionarNome";
import RemoverNome from "./componentes/RemoverNome/RemoverNome";




function App() {
  return <>
    <span>
      1. "Contador é: xx", ao clicar no botão o número deve ser incrementado
      em 1, conforme exemplo:
    </span>
    <div>
      <BotaoContador />
    </div>
    <hr />
    <span>
      2. um para somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre o valor
      atual no meio entre os dois botões:
    </span>
    <div>
      <Contador /> { }
    </div>
    <hr />
    <span>
      3. Crie dois campos tipo numérico, e um botão "Somar" que ao ser clicado deve somar os dois valores e mostrar o
      resultado:
    </span>
    <div>
      <Somar /> { }
    </div>
    <hr />
    <span>
      4. Crie dois campos tipo numérico,
      e um botão "Diminuir" que ao ser clicado deve diminuir os dois valores e mostrar
      o resultado:
    </span>
    <div>
      <Diminuir /> { }
    </div>
    <hr />
    <span>
      5. Crie  dois campos tipo numérico, e um botão "Multiplicar" que ao ser clicado deve multiplicar os dois
      valores e mostrar o resultado:
    </span>
    <div>
      <Multiplicar /> { }
    </div>
    <hr />
    <span>
      6. Crie dois campos tipo numérico e um botão "Dividir" que ao ser clicado deve multiplicar os dois valores e mostrar o
      resultado:
    </span>
    <div>
      <Dividir /> { }
    </div>
    <hr />

    <span>
      7. Considere o valor do dólar igual a R$5,00. Crie um componente chamado
      CambioDolar que contém dois campos tipo numérico, ao ser digitado a valor em
      real deve ser calculado o valor em dólar e o contrário também deve ocorrer:
    </span>

    <div>
      <CambioDolar />
    </div>
    <hr />
    <span>
      8. Considere o valor do euro igual a R$5,50. Crie um componente chamado
      CambioEuro que contém dois campos tipo numérico, ao ser digitado a valor em
      real deve ser calculado o valor em euro e o contrário também deve ocorre:
    </span>

    <div>
      <CambioEuro />
    </div>
    <hr />
    <span>
      9. Considere a fórmula do IMC = peso / (altura * altura) e status: 18.5 = "Abaixo do
      peso", 25 = "Peso normal", 30 = "Sobrepeso" e acima de 30 = "Obeso" . Crie um
      componente chamado CalculoIMC que contém dois campos tipo numérico, e um
      botão "Calcular IMC" que ao ser clicado deve fazer o cálculo e mostrar o
      resultado, conforme exemplo:
    </span>
    <div>
      <CalculoIMC />
    </div>
    <hr />
    <span>
      10.Crie um componente chamado AdicionarNome que contém um campo do tipo
      texto e um botão "Adicionar" que ao ser clicado deve adicionar o nome digitado
      em uma lista:
    </span>
    <div>
      <AdicionarNome />
    </div>
    <hr />
    <span>
    11.Crie um componente chamado RemoverNome que contém uma lista de nomes
    com o botão "Remover" ao lado que ao ser clicado deve remover o respectivo
    nome da lista:
   </span>
   <div>
    <RemoverNome/>
   </div>
   <hr />







  </>;
}

export default App;
