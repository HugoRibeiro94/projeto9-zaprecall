import play from './../assets/seta_play.png'
import virar from './../assets/seta_virar.png'
import certo from './../assets/icone_certo.png'
import erro from './../assets/icone_erro.png'
import quase from './../assets/icone_quase.png'
import { useState } from 'react'
import { BotaoZap, BotaoQuase, BotaoNot, Pergunta1,Pergunta } from "./Perguntas/style";

export default function Perguntas(props){
    
    const {pergunta,cards,indice,contador,setContador} = props;

    const [virada, setVirada] = useState(true);
    const [segundaVirada, setSegundaVirada] = useState(true);
    const [resposta, setResposta] = useState('black');
    const [icone, setIcone] = useState(play);
    const [ativar, setAtivar] = useState(false);
    const [dataTest, setDataTest] = useState('');
    

    function virarCard(){
        setVirada(false);
        
    }
   
    function exibirRespostaComBotoes(){
        setSegundaVirada(false);
    }

    function responderQuizz(res){
        setResposta(res);
        setVirada(true);

        if(res==='erro'){
            setIcone(erro);
            setAtivar(true);
            setDataTest("no-icon");
            setContador(contador+1);
        }
        if(res==='quase'){
            setIcone(quase);
            setAtivar(true);
            setDataTest("partial-icon");
            setContador(contador+1);
        }
        if(res==='certo'){
            setIcone(certo);
            setAtivar(true);
            setDataTest("zap-icon");
            setContador(contador+1);
        }
    }

    return(
        <>
            {virada===true ?(<Pergunta resposta={resposta} data-test="flashcard">
                <p data-test="flashcard-text">{pergunta}</p>
                <button data-test="play-btn" onClick={virarCard} disabled={ativar}>
                    <img data-test={dataTest} src={icone}/>
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

