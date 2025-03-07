import styled from 'styled-components';
import { Header } from '../organismos/Header';

export function SettingsTemplate() {
  return (
    <Container>
      <header className="header">
        <Header />
      </header>

      <section className="section1"></section>

      <section className="section2"></section>

      <main></main>
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
  background-color: rgb(229, 67, 26);
  display: flex;
  align-items: center;
}

.section1 {
  grid-area: section1;
  background-color: rgb(255, 0, 0);
  display: flex;
  align-items: center;
}

.section2{
  grid-area: section2;
  background-color: rgb(0, 255, 13);
  display: flex;
  align-items: center;
}

main {
  grid-area: main;
  background-color: rgb(255, 255, 0);
}



`;