import style from 'styled-components';
import { Button } from '../moleculas/Button';
import {v} from "../../styles/variables";

export function LoginTemplate() {
  return (
    <Container img={v.imagenfondo}>
        <div className='contentCard'>
          <span className='version'>Version 1.0 UIO</span>
          <div className='contentImg'>
            <img src={v.logo} alt="" />            
          </div>
          <Titulo>
            Gastos
          </Titulo>
          <p className='slogan'>Administra tus finanzas de manera eficiente y sencilla. 💵</p>
          <ContainerButton>
            <Button title="Iniciar Sesión" bgcolor={v.colorSecundario} icon={<v.iconogoogle/>} />
          </ContainerButton>          
        </div>

    </Container>
  );
}

const Container = style.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;

  .contentCard {
    background-color: rgba(0, 0, 0, 0.781);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 30rem;
    margin: 2rem;
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);

    .version {
      text-align: start;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.5rem;
      font-weight: 700;
    }

    .contentImg {
      img{
        max-width: 60%;
        animation: flotar 4s ease-in-out infinite alternate;
      }
    }

    .slogan {
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.2rem;
  }

  @keyframes flotar {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0px, -0px);
    }
  }

`;

const Titulo = style.h1`
  font-size: 5rem;
  font-weight: 700px;
`;


const ContainerButton = style.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;