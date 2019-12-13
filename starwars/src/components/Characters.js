import React, {useState, useEffect} from 'react';
import {CharContainer, CharInfo} from './StarWars'

const Char = ({ name, gender }) => {

    return (
        <CharInfo>
            <h2>{name}</h2>
            <span>{gender}</span>
        </CharInfo>
    )
}

const Characters = ({ characters }) => {

    return (
        <CharContainer>
            {characters.map(char => <Char name={char.name} gender={char.gender} key={char.name} />)}
        </CharContainer>
    );
}
export default Characters;
