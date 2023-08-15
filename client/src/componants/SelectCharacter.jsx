import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SelectCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const { userId } = useParams();
  const [userName, setUserName] = useState('');
  console.log(characters)
  console.log(userId + " is the user id")
  console.log(userName + " is the user name")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/characters/${userId}`);
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${userId}`);
        console.log(response.data + " is the user data")
        setUserName(response.data.UserName);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
    fetchUser();
  }, []);

  const deleteCharacter = async (characterId) => {
    console.log(characterId + " is the character id")
    try {
      await axios.delete(`http://localhost:8000/api/character/${characterId}`);
      console.log(`Character with ID: ${characterId} deleted successfully`);
      const newCharacters = characters.filter((character) => character._id !== characterId);
      setCharacters(newCharacters);
    } catch (error) {
      console.error(`Error deleting character with ID: ${characterId}`, error);
    }
  };


  return (
    <div className='mainCharacterSelectContainer'>
      <div className="characterSelectHeader">
      
      <h1>{userName}'s Characters</h1>
      </div>
      <div className="listOfUsersCharacters">

      {characters.map(character => (
        <div key={character._id} className='characterCard'>
          <div className="characterCardCharacterName">
            <h3>{character.Information.Name}</h3><br/>
          </div>
          <div className="charactersCardLinks">
            
          <Link to={`/characters/${character._id}/${userId}`}>View</Link> <span> | </span>
          <Link to={`/characters/edit/${character._id}/${userId}`}>Edit</Link> <span> | </span>
          <Link onClick={() => deleteCharacter(character._id)}>Delete</Link>
          </div>
        </div>
      ))}

      </div>
      <Link className='newCharacterLink' to={`/characters/new/${userId}`}>Create new character</Link>
    </div>
  );
};

export default SelectCharacter;
