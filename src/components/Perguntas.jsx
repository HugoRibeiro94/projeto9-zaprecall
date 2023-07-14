import play from './../assets/seta_play.png'
import virar from './../assets/seta_virar.png'
import certo from './../assets/icone_certo.png'
import erro from './../assets/icone_erro.png'
import quase from './../assets/icone_quase.png'
import { styled } from 'styled-components'
import { useState } from 'react'

export default function Perguntas(props){
    //console.log(props.cards)
    const {pergunta,cards,indice} = props;

    const [virada, setVirada] = useState(true);
    const [segundaVirada, setSegundaVirada] = useState(true);
    const [resposta, setResposta] = useState('black');
    const [icone, setIcone] = useState(play);
    const [ativar, setAtivar] = useState(false);

    function virarCard(){
        setVirada(false);
        
    }
    //console.log(virada);
    function exibirRespostaComBotoes(){
        setSegundaVirada(false);
    }

    function responderQuizz(res){
        setResposta(res);
        setVirada(true);
        console.log(res)
        if(res==='erro'){
            setIcone(erro);
            setAtivar(true);
        }
        if(res==='quase'){
            setIcone(quase);
            setAtivar(true);
        }
        if(res==='certo'){
            setIcone(certo);
            setAtivar(true);
        }
    }

    return(
        <>
            {virada===true ?(<Pergunta resposta={resposta} data-test="flashcard">
                <p data-test="flashcard-text">{pergunta}</p>
                <button data-test="play-btn" onClick={virarCard} disabled={ativar}>
                    <img src={icone}/>
                </button>
            </Pergunta>):
            (<Pergunta1 resposta={resposta} data-test="flashcard">
                { segundaVirada === true ? 
                    (<div>
                        <p data-test="flashcard-text">{cards[indice].question}</p>
                            <img src={virar} onClick={exibirRespostaComBotoes} data-test="turn-btn"/>
                        </div>)
                    :
                    (<div>
                        <p data-test="flashcard-text">{cards[indice].answer}</p>
                        <BotaoNot onClick={() => responderQuizz('erro')} data-test="no-btn">
                            Não Lembrei
                        </BotaoNot>
                        <BotaoQuase onClick={() => responderQuizz('quase')} data-test="partial-btn">
                            Quase não lembrei
                        </BotaoQuase>
                        <BotaoZap onClick={() => responderQuizz('certo')} data-test="zap-btn">
                                Zap!
                        </BotaoZap></div>)}
            </Pergunta1>)}
        </>
    )
}

const BotaoZap = styled.button`
    width: 85.17px;
    height: 37.17px;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: green;
    border: none;
    border-radius: 5px;
`

const BotaoQuase = styled.button`
    width: 85.17px;
    height: 37.17px;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: orange;
    border: none;
    border-radius: 5px;
`

const BotaoNot = styled.button`
    width: 85.17px;
    height: 37.17px;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: red;
    border: none;
    border-radius: 5px;
`;

const Pergunta1= styled.div`
    width: 300px;
    height: 100px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 212, 1);
    color: rgba(51, 51, 51, 1);
    border-radius: 5px;
    font-family: Recursive;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    justify-content: space-around;
`;

const Pergunta = styled.div`
    width: 300px;
    height: 65px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 1);
    color: ${(p) => {
        
        if(p.resposta==='black'){
            return 'black';
        }
        if(p.resposta==='erro'){
            return 'red';
        }
        if(p.resposta==='quase'){
            return 'orange';
        }
        if(p.resposta==='certo'){
            return 'green';
        }
    }};
    border-radius: 5px;
    font-family: Recursive;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button{
        border: none;
        background-color: rgba(255, 255, 255, 1);
      }
`