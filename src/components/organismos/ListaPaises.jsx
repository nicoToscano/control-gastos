import styled from 'styled-components';
import { InputBuscadorLista } from '../moleculas/InputBuscadorLista';
import iso from 'iso-country-currency';
import { ConvertirCapital } from '../../utils/Conversiones'
import { useState } from 'react';
import { Device } from '../../styles/breakpoints';
import { BtnCerrar } from '../atomos/btnCerrar';

export function ListaPaises({ setSelect, setState, editarTemaMonedaUser, id}) {

    const [dataResult, setDataResult] = useState([]);

    const isocodigos = iso.getAllISOCodes();

    function buscar(e) {
        let filtrado = isocodigos.filter((item) => {
            return item.countryName == ConvertirCapital(e.target.value);
        });
        setDataResult(filtrado);
    }

    function actualizar(item) {
        setSelect(item);

        editarTemaMonedaUser({
            moneda: item.symbol,
            pais: item.countryName,
            id: id
        });

        setState();
    }

    return (
        <Container>
            <header className='headerSearch'>
                <span className='headerText'>Busca tu país</span>
                <BtnCerrar funcion={setState} />
            </header>
            <InputBuscadorLista onChange={buscar} placeholder='Buscar...' />
            {
                dataResult.length > 0 &&
                dataResult.map((item, index) => {
                    return (
                        <ItemContainer key={index} onClick={() => actualizar(item)}>
                            <span>{item.countryName}</span>
                            <span>{item.symbol}</span>
                        </ItemContainer>
                    );
                })
            }
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
    background-color: ${(props) => props.theme.bg4};
    border-radius: 10px;
    border: 3px solid #3a3a3a;
    padding: 10px;
    gap: 10px;
    color: ${(props) => props.theme.text};

    z-index: 3;


    @media ${Device.tablet} {
        width: 400px;        
    }

    .headerSearch{
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
        background-color: #303030;
    }

`