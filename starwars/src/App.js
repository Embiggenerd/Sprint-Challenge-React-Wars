import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

import styled from 'styled-components'

export const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

const App = () => {
  const [characters, setCharacters] = useState([])
  const [character1, setCharacter1] = useState({})


  useEffect(() => {
    const charsArr = []
    for (let i = 1; i < 11; i++) {
      axios.get(`https://swapi.co/api/people/${i}/`)
        .then((res) => charsArr.push(res.data))
        .catch(e => console.log('sw err:', e))
    }
    console.log('charArr', charsArr)
    setCharacters(charsArr)
    
  }, [])

  useEffect(()=>console.log('lala',characters), [characters])

  return (
    <div className="App">
      <Header>React Wars</Header>

      {characters.map((char) => <div>{char.name}</div>)}
    </div>
  );
}

export default App;
