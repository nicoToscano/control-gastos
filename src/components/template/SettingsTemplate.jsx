import styled from 'styled-components';
import { Header } from '../organismos/Header';
import { useState } from 'react';
import { Selector } from '../organismos/Selector'
import { v } from '../../styles/variables';
import { ListaPaises } from '../organismos/ListaPaises'
import { useUsuariosStore } from '../../store/UsuariosStore';

export function SettingsTemplate() {
  const { datausuarios } = useUsuariosStore();
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [select, setSelect] = useState([]);
  const moneda = select.symbol ? select.symbol : datausuarios.moneda;
  const pais = select.countryName ? select.countryName : datausuarios.pais;
  const paisSeleccionado = "😊 " + moneda + " " + pais;

  return (
    <Container>
      <header className="header">
        <Header stateConfig={{ state: state, setState: () => setState(!state) }} />
      </header>

      <section className="section1">
        <h1>Ajustes</h1>
      </section>

      <section className="section2">
        <ContentCard>
          <span>Moneda:</span>
          <Selector state={stateListaPaises} color={v.colorselector} funcion={() => setStateListaPaises(!stateListaPaises)} texto1={paisSeleccionado} />
          {
            stateListaPaises &&
            (
              <ListaPaises setSelect={(p) => setSelect(p)} setState={() => setStateListaPaises(!stateListaPaises)} />
            )
          }

        </ContentCard>
      </section>

      <main className='main'></main>
    </Container>
  );
}

const Container = styled.div`
min-height: 100vh;
padding: 15px;
width: 100%;
color: ${(props) => props.theme.text};
display: grid;

grid-template: 
  "header" 100px
  "section1" 100px
  "section2" 50px
  "main" auto;

.header {
  grid-area: header;
  background-color: rgba(255, 210, 199, 0.26);
  display: flex;
  align-items: center;
}

.section1 {
  grid-area: section1;
  background-color: rgba(221, 255, 176, 0.226);
  display: flex;
  align-items: center;
}

.section2{
  grid-area: section2;
  background-color: rgba(164, 181, 255, 0.212);
  display: flex;
  align-items: center;
}

main {
  grid-area: main;
  background-color: rgba(199, 239, 255, 0.26);
}

`;

const ContentCard = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  height: 100%;
`