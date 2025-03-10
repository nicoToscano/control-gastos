import { MyRoutes } from './routes/routes'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Light, Dark } from './styles/themes'
import { ThemeProvider, styled } from 'styled-components'
import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import { Sidebar } from './components/organismos/sidebare/Sidebar'
import { Burgermenu } from './components/organismos/burgerMenu/Burgermenu'
import { Device } from './styles/breakpoints'
import { useUsuariosStore } from './store/UsuariosStore'
import { useQuery} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark');
  const themeStyles = theme === 'light' ? Light : Dark;
  const { pathname } = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(true);
  const { mostrarUsuarios } = useUsuariosStore();
  const { isLoading, error } = useQuery({
    queryKey: ['usuarios'],
    queryFn: () => mostrarUsuarios(),
  });
  

  if (isLoading) return <h1>Cargando...</h1>

  if (error) return <h1>Error: {error.message}</h1>

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyles}>
        <AuthContextProvider>

          {
            pathname != '/login' ? (

              <Container className={sidebarOpened ? 'active' : ''}>

                <div className='ContentSidebar'>
                  <Sidebar state={sidebarOpened} setState={() => setSidebarOpened(!sidebarOpened)} />
                </div>

                <div className='ContentBurgerMenu'>
                  <Burgermenu />
                </div>

                <ContainerBody>
                  <MyRoutes />
                </ContainerBody>

              </Container>
            ) : (
              <MyRoutes />
            )}
            <ReactQueryDevtools initialIsOpen={true} />
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
background-color: ${(props) => props.theme.bg2};

transition: all 0.3s ease-in-out;

.ContentSidebar{
  display: none;  
}
.ContentBurgerMenu{
  display: block;
  position: absolute;
}

@media ${Device.tablet} {
  grid-template-columns: 65px 1fr;

  &.active {
  grid-template-columns: 220px 1fr;
}

  .ContentSidebar{
    display: block;
  }
  .ContentBurgerMenu{
    display: none;
  }
}

`;

const ContainerBody = styled.div`

grid-column: 1;
width: 100%;

@media ${Device.tablet} {
  grid-column: 2;
}
`;

export default App
