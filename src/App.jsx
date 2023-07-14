import Header from './components/Header'
import Footer from './components/Footer'
import cards from './cards';
import PerguntasCard from './components/Perguntas'
import { styled } from 'styled-components'
import { useState } from 'react';

function App() {

  const perguntas = ["Pergunta 1","Pergunta 2","Pergunta 3","Pergunta 4","Pergunta 5","Pergunta 6","Pergunta 7","Pergunta 8"];

  const [contador, setContador] = useState(0);

  return (
    <>
      <Header/>

        <ContainerPerguntas>
          {perguntas.map( (pergunta,indice) => <PerguntasCard key={pergunta} pergunta={pergunta} cards={cards} indice={indice} contador={contador} setContador={setContador}/>) }
        </ContainerPerguntas>
        
        <Footer contador={contador} setContador={setContador}/>
    </>
  )
}

export default App

const ContainerPerguntas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color:rgba(251, 107, 107, 1)
`;