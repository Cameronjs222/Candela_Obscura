import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetails = () => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/character/6472c7d9d26127ccf14d1deb');
                setCharacter(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCharacterData();
    }, []);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Character Details</h1>
            <h2>Name: {character.Information.Name}</h2>
            <p>Pronouns: {character.Information.Pronouns}</p>
            <p>Circle: {character.Information.Circle}</p>
            <p>Style: {character.Information.Style}</p>
            <p>Catalyst: {character.Information.Catalyst}</p>
            <p>Question: {character.Information.Question}</p>

            <h2>Stats</h2>
            <p>Nerve Move Value: {character.Stats.Nerve.move.value}</p>
            <p>Nerve Strike Value: {character.Stats.Nerve.strike.value}</p>
            <p>Nerve Control Value: {character.Stats.Nerve.control.value}</p>
            <p>Nerve Drive Value: {character.Stats.Nerve.nerveDrive.value}</p>

            <p>Cunning Sway Value: {character.Stats.Cunning.sway.value}</p>
            <p>Cunning Read Value: {character.Stats.Cunning.read.value}</p>
            <p>Cunning Hide Value: {character.Stats.Cunning.hide.value}</p>
            <p>Cunning Drive Value: {character.Stats.Cunning.cunningDrive.value}</p>

            <p>Intuition Survey Value: {character.Stats.Intuition.survey.value}</p>
            <p>Intuition Focus Value: {character.Stats.Intuition.focus.value}</p>
            <p>Intuition Sense Value: {character.Stats.Intuition.sense.value}</p>
            <p>Intuition Drive Value: {character.Stats.Intuition.intuitionDrive.value}</p>

            <h2>Marks</h2>
            <p>Body: {character.Marks.body}</p>
            <p>Brain: {character.Marks.brain}</p>
            <p>Bleed: {character.Marks.bleed}</p>

            <h2>Other Details</h2>
            <p>Role: {character.Role}</p>
            <p>Specialty: {character.Specialty}</p>
            <p>Relationships: {character.Relationships.join(', ')}</p>
        </div>
    );
};

export default CharacterDetails;
