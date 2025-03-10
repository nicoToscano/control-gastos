import styled from 'styled-components';
import { v } from '../../styles/variables';
import { InputBuscadorLista } from '../moleculas/InputBuscadorLista';
import iso from 'iso-country-currency';
import { ConvertirCapital } from '../../utils/Conversiones'
import { useState } from 'react';

export function ListaPaises({ setSelect, setState }) {

    const [dataResult, setDataResult] = useState([]);

    const isocodigos = iso.getAllISOCodes();

    function buscar(e) {
        let filtrado = isocodigos.filter((item) => {
            return item.countryName == ConvertirCapital(e.target.value);
        });
        setDataResult(filtrado);
    }

    function seleccionar(item) {
        setSelect(item);
        setState();
    }

    return (
        <Container>
            <header className='header'>
                <span>Busca tu país</span>
                <span className="close" onClick={setState}>{<v.iconocerrar />}</span>
            </header>
            <InputBuscadorLista onChange={buscar} placeholder='Buscar...' />
            {
                dataResult.length > 0 &&
                dataResult.map((item, index) => {
                    return (
                        <ItemContainer key={index} onClick={() => seleccionar(item)}>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.bg4};
    border-radius: 10px;
    border: 3px solid #3a3a3a;
    padding: 10px;
    gap: 10px;
    color: ${(props) => props.theme.text};

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: inherit;

        .close {
            cursor: pointer;
            font-size: 25px;
            transition: all 0.3s;

            &:hover {
                color: ${() => v.colorselector};
                transform: scale(1.2);
            }

        }
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