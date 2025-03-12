import styled, { keyframes } from "styled-components";

export function ComingSoon() {
  return (
    <Container>
      <Text>Muy Pronto</Text>
    </Container>
  );
}

// Animaciones
const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(130px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Estilos
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #b88383, #8d6969);
  color: white;
  font-family: 'Poppins', sans-serif;
`;

const Text = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  animation: ${fadeInSlideUp} 1.5s ease-in-out;
`;

