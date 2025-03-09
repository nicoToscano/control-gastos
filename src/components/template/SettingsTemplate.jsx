import styled from 'styled-components';
import { Header } from '../organismos/Header';
import { useState } from 'react';

export function SettingsTemplate() {

  const [state, setState] = useState(false);

  return (
    <Container>
      <header className="header">
        <Header stateConfig={{state: state, setState: () => setState(!state)}}/>
      </header>

      <section className="section1"></section>

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
  "section1" 100px
  "section2" 100px
  "main" auto;

.header {
  grid-area: header;
  background-color: rgb(255, 210, 199);
  display: flex;
  align-items: center;
}

.section1 {
  grid-area: section1;
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