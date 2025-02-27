import { MyRoutes } from './routes/routes'
import { createContext } from 'react'
import { Light, Dark } from './styles/themes'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light');
  const themeStyles = theme === 'light' ? Light : Dark;

  return (
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyles}>
          <AuthContextProvider>
            <MyRoutes />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
  );
}

export default App
