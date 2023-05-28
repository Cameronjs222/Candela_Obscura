import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SelectCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const { userId } = useParams();
  console.log(characters)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/characters/${userId}`);
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      {characters.map(character => (
        <div key={character._id}>
          <Link to={`/characters/${character._id}`}>{character.Information.Name}</Link>
        </div>
      ))}

      <Link to={`/characters/new/${userId}`}>Create new character</Link>
    </div>
  );
};

export default SelectCharacter;
