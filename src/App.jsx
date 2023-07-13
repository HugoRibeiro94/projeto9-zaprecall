import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import play from './assets/seta_play.png'
import cards from './cards';

function App() {

  const perguntas = ["Pergunta 1","Pergunta 2","Pergunta 3","Pergunta 4","Pergunta 5","Pergunta 6","Pergunta 7","Pergunta 8"];

  //const [pergunta, setPergunta] = useState([]);

  const [perguntaSelecionada, setPerguntaSelecionada] = useState('');

  function definirPergunta(){
    console.log('opa');
    return(
      'pergunta x'
    );
  }

  function mostrarPergunta(i){
    //const perguntaRenderizada = cards[i].question;
    //console.log(perguntaRenderizada);

    setPerguntaSelecionada(i);
  }
  //console.log(perguntaSelecionada);
  
  return (
    <>
      <div className='container'>

        <Header/>

        <div className='container-perguntas'>
          {perguntas.map( (pergunta,indice) => 
            <div 
              key={indice} 
              className='pergunta'
              data-test="flashcard"
            >
              <p data-test="flashcard-text">{pergunta}</p>
              <button
                data-test="play-btn" 
                onClick={() => mostrarPergunta (indice)}>
                <img src={play}/>
              </button>
            </div>
          )}
        </div>
        
        <Footer/>

      </div>
    </>
  )
}

export default App
