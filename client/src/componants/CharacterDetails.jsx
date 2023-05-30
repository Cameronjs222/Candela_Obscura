import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
    const [character, setCharacter] = useState(null);
    const [activeElement, setActiveElement] = useState(null);

    let { charId } = useParams();

    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/character/' + charId);
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

    const handleButtonClick = (element) => {

        console.log(element);
        setActiveElement(element === activeElement ? null : element);
    };

    return (
        <div>
            <h1>Character Details</h1>
            <div className="characterInformation bg-danger">
                <button onClick={() => handleButtonClick('details')}>View Character details</button>
                <button onClick={() => handleButtonClick('style')}>View Character Style</button>
                <button onClick={() => handleButtonClick('catalyst')}>View Character Catalyst</button>
                <button onClick={() => handleButtonClick('question')}>View Character Question</button>

                {activeElement === 'details' && (
                    <>
                        <h2>Name: {character.Information.Name}</h2>
                        <h2>Pronouns: {character.Information.Pronouns}</h2>
                        <h2>Circle: {character.Information.Circle}</h2>
                    </>
                )}
                {activeElement === 'style' && <h2>Style: {character.Information.Style}</h2>}
                {activeElement === 'catalyst' && <h2>Catalyst: {character.Information.Catalyst}</h2>}
                {activeElement === 'question' && <h2>Question: {character.Information.Question}</h2>}
            </div>
            <h2>Stats</h2>

            <div className="characterStats">
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
            </div>

            <div className='characterMarks'></div>
            <h2>Marks</h2>
            <p>Body: {character.Marks.body}</p>
            <p>Brain: {character.Marks.brain}</p>
            <p>Bleed: {character.Marks.bleed}</p>
            <p>Relationships: {character.Relationships.join(', ')}</p>
            <p>Scars: {character.Scars}</p>

            <div className='characterAbilities'>
            <h2>Other Details</h2>
            <p>Role: {character.Role}</p>
            <p>Specialty: {character.Specialty}</p>
            </div>

        </div>
    );
};

export default CharacterDetails;
