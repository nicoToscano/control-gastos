import styled from 'styled-components';
import { Device } from '../../styles/breakpoints';
import { BtnCerrar } from '../atomos/btnCerrar';

export function ListaGenerica({ data, setSelect, setState }) {

    function seleccionar(item) {
        setSelect(item);
        setState();
    }

    return (
        <Container>
            <section className='contentClose'>
                <span className='headerText'>Selecciona tu tema preferido:</span>
                <BtnCerrar funcion={setState}/>
            </section>

            <section className='contentItem'>
                {
                    data.map((item, index) => {
                        return (
                            <ItemContainer key={index} onClick={() => seleccionar(item)}>
                                <span>{item.icono}</span>
                                <span>{item.descripcion}</span>
                            </ItemContainer>
                        );
                    })
                }

            </section>
        </Container>
    );
}

const Container = styled.div`

    margin-top: 10px;
    position: absolute;
    top: 88%;
    width: 500px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.bg3};
    color: ${(props) => props.theme.text};
    border-radius: 10px;
    border: 3px solid #3a3a3a;
    padding: 10px;
    gap: 10px;

    z-index: 3;

    @media ${Device.tablet} {
        width: 400px;
    }

    .contentClose {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: inherit;
    }

`

const ItemContainer = styled.section`
    gap: 10px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.bg5active};
    }

`