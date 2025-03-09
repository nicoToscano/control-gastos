import styled from "styled-components";
import { ItemDesplegable } from "./ItemDesplegable";
import { v } from "../../styles/variables";

export function ListaMenuDesplegable({data, top}) {
    return (
        <Container top={top}>
            {
                data.map((item, index) => {
                    return (
                    <ItemDesplegable key={index} item={item}/>)
                })
            }
        </Container>
    );
}

const Container = styled.div`

    padding: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${(props) => props.theme.bg3};
    border-radius: 22px;
    top: ${(props) => props.top};
    box-shadow: ${v.boxshadowGray};

`;