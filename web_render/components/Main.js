import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.js'

export default function Main(props) {
    const {cache, theme, data, } = {props}
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App input={data}/>
            </ThemeProvider>
        </CacheProvider>
    );
}