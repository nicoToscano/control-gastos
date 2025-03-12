import styled from 'styled-components';
import { Header } from '../organismos/Header';
import { useState } from 'react';
import { ContentFiltros } from '../atomos/ContentFiltros';
import { BtnDesplegable } from '../moleculas/BtnDesplegable';
import { useOperacionesStore } from '../../store/OperacionesStore';
import { ListaMenuDesplegable } from '../moleculas/ListaMenuDesplegable';
import { DataDesplegableTipo } from '../../utils/dataEstatica';

export function CategoriesTemplate() {

  const [state, setState] = useState(false);
  const {tituloBtnDes, colorCategoria, bgCategoria, setTipo} = useOperacionesStore();

  function cambiarTipo (tipo) {
    setTipo(tipo);
  }

  return (
    <Container>
      <header className="header">
        <Header stateConfig={{state: state, setState: () => setState(!state)}}/>
      </header>

      <section className="type">
        <ContentFiltros>
          <BtnDesplegable texto={tituloBtnDes} textColor={colorCategoria} bgColor={bgCategoria}/>
          <ListaMenuDesplegable data={DataDesplegableTipo} top="112%" funcion={(p) => cambiarTipo(p)}/>
        </ContentFiltros>
      </section>

      <section className="section2"></section>

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
  "type" 100px
  "section2" 100px
  "main" auto;

.header {
  grid-area: header;
  background-color: rgb(255, 210, 199);
  display: flex;
  align-items: center;
}

.type {
  grid-area: type;
  background-color: rgb(221, 255, 176);
  display: flex;
  align-items: center;
}

.section2{
  grid-area: section2;
  background-color: rgb(164, 181, 255);
  display: flex;
  align-items: center;
}

main {
  grid-area: main;
  background-color: rgb(199, 239, 255);
}



`;