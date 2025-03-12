import styled from "styled-components";
import {Icono} from "../atomos/Icono";

export function Button({ func, title, bgcolor, icon }) {
    return (
        <Container type="submit" $bgcolor={bgcolor}>
            <Icono>{icon}</Icono>
            <span className="btn" onClick={func}>{title}</span>
        </Container>
    );
}

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    gap: 0.5em;
    background-color: initial;
    cursor: pointer;
    z-index: 2;

    .btn {
        background-color: ${props => props.$bgcolor};
        padding: 0.5em 1.3em;
        border-radius: 0.6rem;
        border: 3px solid black;
        font-size: 1.2em;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s;
        box-shadow: 0.1em 0.1em rgba(0, 0, 0, 0.5);

        &:hover {
            transform: translate(-0.05em , -0.05em);
            box-shadow: 0.2em 0.2em rgba(0, 0, 0, 0.5);
        }

        &:active {
            transform: translate(0.05em , 0.05em);
        }
    }

`;