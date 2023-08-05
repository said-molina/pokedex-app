import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/PokedexPage.css'

const PokeTypeList = () => {
  
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
  
    useEffect(() => {
      
      axios.get('https://pokeapi.co/api/v2/type/')
        .then((response) => {
          setTypes(response.data.results);
        })
        .catch((error) => {
          console.error('Error al obtener los tipos de Pokémon:', error);
        });
    }, []);
  
    const handleSelectChange = (event) => {
      setSelectedType(event.target.value);
    };

  return (
    <div className='poke__form__search'>
        <select className='form__input' value={selectedType} onChange={handleSelectChange}>
        <option className='form__input' value="">Types</option>
        {types.map((type) => (
          <option className='form__input' key={type.name} value={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))}
      </select>
      
    </div>
  )
}

export default PokeTypeList