import styled from "styled-components";
import { Icono } from "../atomos/Icono";

export function ItemDesplegable({ item }) {
    return (
        <Container>
            <Icono className="icono">{item.icono}</Icono>
            <span className="texto">{item.text}</span>

        </Container>
    );
}

const Container = styled.div`
    cursor: pointer;
    padding: 8px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover{
        background-color: ${(props) => props.theme.bg4};
    }

    svg {
        font-size: 28px;
        display: block;
    }

`