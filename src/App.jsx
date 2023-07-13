import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import play from './assets/seta_play.png'
import cards from './cards';
import PerguntasCard from './components/Perguntas'
import { styled } from 'styled-components'

function App() {

  const perguntas = ["Pergunta 1","Pergunta 2","Pergunta 3","Pergunta 4","Pergunta 5","Pergunta 6","Pergunta 7","Pergunta 8"];

  const [classPergunta, setClassPergunta] = useState('pergunta');

  const [perguntaSelecionada, setPerguntaSelecionada] = useState('');

  function definirPergunta(){
    console.log('opa');
    return(
      'pergunta x'
    );
  }

  function mostrarPergunta(){
    const classCard = "vermelho";
    setClassPergunta(classCard);
    //setPerguntaSelecionada(i);
  }
  //console.log(perguntaSelecionada);
  
  return (
    <>
      <Header/>

        <ContainerPerguntas>
          {perguntas.map( (pergunta,indice) => <PerguntasCard key={pergunta} pergunta={pergunta} cards={cards} indice={indice}/>) }
        </ContainerPerguntas>
        
        <Footer/>
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