import React from 'react';
import { Header } from './styles'

import TodoForm from './components/form';

const App = () =>  {
  return (
      <Header>
        <h1>TodoLuby</h1>
        <h2>Adicione seu ToDu:</h2>
        <TodoForm/>
      </Header>
  );
};

export default App;
