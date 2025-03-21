import styled from 'styled-components';
import { Header } from '../organismos/Header';
import { useState } from 'react';
import { Selector } from '../organismos/Selector'
import { v } from '../../styles/variables';
import { ListaPaises } from '../organismos/ListaPaises'
import { useUsuariosStore } from '../../store/UsuariosStore';
import { ListaGenerica } from '../moleculas/ListaGenerica';
import { TemasData } from '../../utils/dataEstatica';
import { Button } from '../moleculas/Button';
import { Device } from '../../styles/breakpoints';

export function SettingsTemplate() {
  const { datausuarios, editarTemaMonedaUser } = useUsuariosStore();
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [stateListaTemas, setStateListaTemas] = useState(false);
  const [select, setSelect] = useState([]);
  const [selectTema, setSelectTema] = useState([]);

  const moneda = select.symbol ? select.symbol : datausuarios.moneda;
  const pais = select.countryName ? select.countryName : datausuarios.pais;
  const paisSeleccionado = "😊 " + moneda + " " + pais;

  const iconoDB = datausuarios.tema === "0" ? "☀️" : "🌙";
  const temaDB = datausuarios.tema === "0" ? "Light" : "Dark";
  const iconoInicial = selectTema.icono ? selectTema.icono : iconoDB;
  const temaInicial = selectTema.descripcion ? selectTema.descripcion : temaDB;
  const temaSeleccionado = iconoInicial + " " + temaInicial;

  return (
    <Container>
      <header className="header">
        <Header stateConfig={{ state: state, setState: () => setState(!state) }} />
      </header>

      <section className="section1">
        <h1>Configuración de cuenta</h1>
      </section>

      <section className="section2">
        <ContentCard>
          <span>Moneda:</span>
          <Selector state={stateListaPaises} color={(props) => props.theme.bg5} funcion={() =>{ setStateListaPaises(!stateListaPaises); setStateListaTemas(false);}} texto1={paisSeleccionado} />
          {
            stateListaPaises && !stateListaTemas &&
            (
              <ListaPaises
                setSelect={(p) => setSelect(p)}
                setState={() => setStateListaPaises(!stateListaPaises)}
                editarTemaMonedaUser={editarTemaMonedaUser}
                id={datausuarios.id}
              />
            )
          }

        </ContentCard>
        <ContentCard>
          <span>Tema:</span>
          <Selector state={stateListaTemas} color={(props) => props.theme.bg5} texto1={temaSeleccionado} funcion={() => {setStateListaTemas(!stateListaTemas); setStateListaPaises(false);}} />
          {
            stateListaTemas && !stateListaPaises &&
            (
              <ListaGenerica
                data={TemasData}
                setSelect={setSelectTema}
                setState={() => setStateListaTemas(!stateListaTemas)}
                editarTemaMonedaUser={editarTemaMonedaUser}
                id={datausuarios.id}
              />
            )

          }
        </ContentCard>

        {/* <Button title="Guardar" bgcolor={(props) => props.theme.bg5} icon={<v.iconoguardar/>} func={editar}/> */}

      </section>

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
  "section2" auto;

.header {
  grid-area: header;
  /* background-color: rgba(255, 210, 199, 0.26); */
  display: flex;
  align-items: center;
}

.section1 {
  grid-area: section1;
  /* background-color: rgba(221, 255, 176, 0.226); */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
}

.section2{
  grid-area: section2;
  /* background-color: rgba(164, 181, 255, 0.212); */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  gap: 30px;

  @media ${Device.tablet} {
    flex-direction: row;
    height: 100px;
    justify-content: space-evenly;
  }

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

  @media ${Device.desktop} {
    width: 250px;    
  }

`