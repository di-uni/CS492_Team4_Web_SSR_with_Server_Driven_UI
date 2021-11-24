import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import App from './components/App';
import themeLight from './components/themeLight';
import createEmotionCache from './components/createEmotionCache';

const cache = createEmotionCache();
const data = window.DATA
function Main() {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={themeLight}>
          <CssBaseline />
          <App input={data}/>
        </ThemeProvider>
      </CacheProvider>
    );
  }
ReactDOM.hydrate(<Main />, document.querySelector('#root'));
