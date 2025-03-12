import styled from "styled-components";
import { v } from "../../styles/variables";

export function BtnCerrar({ funcion }) {

    return (
        <Container onClick={funcion}>
            {<v.iconocerrar />}
        </Container>
    );

}

const Container = styled.span`

    cursor: pointer;
    font-size: 25px;
    transition: all 0.3s;

    &:hover {
        color: ${() => v.colorbgGastos};
        transform: scale(1.2);
    }

`