import React from 'react';

import { GlobalStyle } from './App.styles';

import Menu from './components/Menu'
import FormUserData from './components/FormUserData';

const App: React.FC = () => {
  
  
  
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Menu />
     <FormUserData />
    </div>
    </>
  );
}

export default App;
