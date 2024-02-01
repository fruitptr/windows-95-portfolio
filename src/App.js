import React, {useState} from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from './services/dataService';
import DataContext from './contexts/dataContext';
import AppWindow from './components/AppWindow';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 12px
  }
`;

const App = () => (
  <DataContext.Provider value={dataService}>
    <ThemeProvider>
        <GlobalStyle />
        <BodyFontSizeOverride />
        <AppWindow />
    </ThemeProvider>
  </DataContext.Provider>
);
export default App;