import styled from "styled-components";
import { v } from "../../styles/variables";

export function BtnDesplegable({texto, bgColor, textColor, func}) {
    return (
    <Container $bgColor={bgColor} $textColor={textColor} onClick={func} >
        <span className="containerText">
            {<v.iconoFlechabajo/>}
            <h6>{texto}</h6>
        </span>
    </Container>);
}
const Container = styled.div`

    display: flex;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$textColor};
    font-weight: 500;
    font-size: 32px;
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;

    .containerText{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover{
        background-color: ${(props) => props.theme.bg3};
    }
  
`;