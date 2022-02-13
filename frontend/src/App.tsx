import React from 'react';
import './App.css';
import { Home } from './modules';
import CustomThemeProvider from './customThemeProvider';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <Home />
    </CustomThemeProvider>
  );
};

export default App;
