import { MyRoutes } from './routes/routes'
import { createContext } from 'react'
import { Light, Dark } from './styles/themes'
import { ThemeProvider, styled } from 'styled-components'
import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import { Sidebar } from './components/organismos/sidebare/Sidebar'
import { Burgermenu } from './components/organismos/burgerMenu/Burgermenu'
import { Device } from './styles/breakpoints'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark');
  const themeStyles = theme === 'light' ? Light : Dark;

  const [sidebar, setSidebar] = useState(false);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyles}>
        <AuthContextProvider>

          <Container className={sidebar ? 'active' : ''}>

            <div className='ContentSidebar'>
              <Sidebar state={sidebar} setState={setSidebar}/>
            </div>

            <div className='ContentBurgerMenu'>
              <Burgermenu />
            </div>


            <ContainerBody>
              <MyRoutes />
            </ContainerBody>

          </Container>

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
