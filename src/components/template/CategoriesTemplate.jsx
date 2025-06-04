import styled from "styled-components";
import { Header } from "../organismos/Header";
import { useState } from "react";
import { ContentFiltros } from "../atomos/ContentFiltros";
import { BtnDesplegable } from "../moleculas/BtnDesplegable";
import { useOperacionesStore } from "../../store/OperacionesStore";
import { ListaMenuDesplegable } from "../moleculas/ListaMenuDesplegable";
import { DataDesplegableTipo } from "../../utils/dataEstatica";
import { BtnFiltro } from "../moleculas/BtnFiltro";
import { v } from "../../styles/variables";

export function CategoriesTemplate() {
  const [state, setState] = useState(false);
  const [stateTipo, setStateTipo] = useState(false);
  const { tituloBtnDes, colorCategoria, bgCategoria, setTipo } =
    useOperacionesStore();

  function cambiarTipo(tipo) {
    setTipo(tipo);
    setStateTipo(false);
    setState(false);
  }

  function cerrarDesplegable() {
    setStateTipo(false);
    setState(false);
  }

  function openTipo(){
    setStateTipo(!stateTipo);
    setState(false);
  }

  function openUser() {
    setState(!state);
    setStateTipo(false);
  }

  return (
    <Container onClick={cerrarDesplegable}>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: openUser }}
        />
      </header>

      <section className="type">
        <ContentFiltros>
          <div
            onClick={(e) => 
              e.stopPropagation()
            }
          >
            <BtnDesplegable
              texto={tituloBtnDes}
              textColor={colorCategoria}
              bgColor={bgCategoria}
              func={openTipo}
            />
            {stateTipo && (
              <ListaMenuDesplegable
                data={DataDesplegableTipo}
                top="112%"
                funcion={(p) => cambiarTipo(p)}
              />
            )}
          </div>
        </ContentFiltros>
      </section>

      <section className="section2">
        <ContentFiltro>
            <BtnFiltro bgColor={bgCategoria} textColor={colorCategoria} icono={<v.agregar/>}/>
        </ContentFiltro>
      </section>

      <main className="main"></main>
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
    background-color: rgba(255, 210, 199, 0.5);
    display: flex;
    align-items: center;
  }

  .type {
    grid-area: type;
    background-color: rgb(221, 255, 176, 0.5);
    display: flex;
    align-items: center;
  }

  .section2 {
    grid-area: section2;
    background-color: rgb(164, 181, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: end;
  }

  main {
    grid-area: main;
    background-color: rgb(199, 239, 255, 0.5);
  }
`;

const ContentFiltro = styled.div`
display: flex;
flex-wrap: wrap;
`;