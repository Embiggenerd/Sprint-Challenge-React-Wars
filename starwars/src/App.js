import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Characters from './components/Characters'
import './App.css';

import styled from 'styled-components'

export const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

export const AppContainer = styled.div`
  text-align: center;
`

const App = () => {
  
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    
    axios.get('https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json')
    .then(res => setCharacters(res.data))
    .catch(e => console.log(e))
   
  }, [])

  return (
    <AppContainer>
      <Header>StarWars</Header>
      <Characters characters={characters} />
    </AppContainer>
  );
}

export default App;
