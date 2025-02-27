import style from 'styled-components';

import { useAuthStore } from '../store/AuthStore';

export function Home() {

  const { signout } = useAuthStore();

  return (
    <Container>
      <h1>Bienvenidos</h1>
      <button onClick={signout}>Cerrar sesion</button>
    </Container>
  );
}

const Container = style.div`
height: 100vh;
`;