import { styled } from "styled-components";

export default function Footer(){
    return(
        <Rodape data-test="footer">
          <p>CONCLUIDOS</p>
        </Rodape>
    );
}

const Rodape = styled.div`
  height: 70px;
  font-family: Recursive;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.05) ;
  display: flex;
  justify-content: center;
  align-items: center;
`;