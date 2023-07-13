import { styled } from 'styled-components';
import logo from './../assets/logo.png'

export default function Header(){
    return(
        <Cabeçalho>
          <img src={logo} alt="logo" />
          <p>ZapRecall</p>
        </Cabeçalho>
    );
}

const Cabeçalho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color:rgba(251, 107, 107, 1);
  img{
    width: 60px;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p{
    font-family: Righteous;
    font-weight: 400;
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;