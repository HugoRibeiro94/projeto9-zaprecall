import { styled } from "styled-components";


export const BotaoZap = styled.button`
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

export const BotaoQuase = styled.button`
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

export const BotaoNot = styled.button`
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

export const Pergunta1= styled.div`
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

export const Pergunta = styled.div`
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
    text-decoration: ${(p) => {

        if(p.resposta==='black'){
            return 'none';
        }
        if(p.resposta==='erro'||'quase'||'certo'){
            return 'line-through';
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