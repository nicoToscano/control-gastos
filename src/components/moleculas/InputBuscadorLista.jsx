import styled from 'styled-components';
import { v } from '../../styles/variables';

export function InputBuscadorLista({onChange, placeholder}) {
    return (
        <Container>
            <input onChange={onChange} placeholder={placeholder} type='text'></input>
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    input {
        background-color: ${(props) => props.theme.bgtotal};
        font-size: 16px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid gray;
        color: ${(props) => props.theme.text};
        outline: none;
        
        &:focus {
            border-bottom: none;
        }

        &::placeholder {
            color: #c8c8c8;
        }
    }

`