import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Switch from 'react-switch'

import usePersistedState from './utils/usePersistedState'

import light from './assets/themes/light'
import dark from './assets/themes/dark'

import Routes from './routes';

import GlobalStyle from './assets/styles/global'

function App() {

  const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light )
  }

  return (
    <ThemeProvider theme={theme}>

      <div className="switcher">
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          onColor="#8257E5"
          offColor="#04D361"
        />
      </div>

      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
