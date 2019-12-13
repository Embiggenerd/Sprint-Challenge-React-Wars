import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

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
    // axios.get(`https://swapi.co/api/people/1`)
    //   .then(res=>setCharacter1(res.data))
    //   .then(e => console.log(e))
  }, [])

  useEffect(()=>console.log('lala',characters), [characters])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {characters.map((char) => <div>{char.name}</div>)}
    </div>
  );
}

export default App;
