import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
    const [character, setCharacter] = useState(null);
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


    // console.log(character.Specialty.abilities[0].title);
    if (!character) {
        return <div>Loading...</div>;
    }


    return (
        <div className='wholeContainer'>
            <div className="CharacterHeader">



            </div>

            <div className='mainContainer'>

                <div className="characterInformation" >

                    <p>Name: {character.Information.Name}</p>
                    <p>Pronouns: {character.Information.Pronouns}</p>
                    <p>Circle: {character.Information.Circle}</p>
                    <p>Style: {character.Information.Style}</p>
                    <p>Catalyst: {character.Information.Catalyst}</p>
                    <p>Question: {character.Information.Question}</p>
                </div>
                <div className='characterStatContainer' >

                    <div className="characterStats">
                        <div className="nerve statContainer">
                            <div className="statHeader">
                                <div className="nerveHeaderTitle">
                                    <h3>
                                        Nerve
                                    </h3>
                                </div>
                                <div>
                                    Drives {character.Stats.Nerve.nerveDrive.value}
                                </div>
                            </div>
                            <p className='statItem'>Move: {
                                character.Stats.Nerve.move.value
                            }</p>
                            {character.Stats.Nerve.move.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>
                            <p className='statItem'>Strike: {
                                character.Stats.Nerve.strike.value
                            }</p>
                            {character.Stats.Nerve.strike.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>
                            <p className='statItem'>Control: {
                                character.Stats.Nerve.control.value
                            }</p>
                            {character.Stats.Nerve.control.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>
                        </div>
                        <div className="cunning statContainer">
                            <div className="statHeader">
                                <div className="nerveHeaderTitle">
                                    <h3>
                                        Cunning
                                    </h3>
                                </div>
                                <div>
                                    Drives {character.Stats.Cunning.cunningDrive.value}
                                </div>
                            </div>
                            <p className='statItem'>Sway: {
                                character.Stats.Cunning.sway.value
                            }</p>
                            {character.Stats.Cunning.sway.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue 1"></div>
                                <div className="statValue 2"></div>
                                <div className="statValue 3"></div>
                            </div>
                            <p className='statItem'>Read: {
                                character.Stats.Cunning.read.value
                            }</p>
                            {character.Stats.Cunning.read.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>
                            <p className='statItem'>Hide: {
                                character.Stats.Cunning.hide.value
                            }</p>
                            {character.Stats.Cunning.hide.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>
                        </div>
                        <div className="intuition statContainer">
                            <div className="statHeader">
                                <div className="nerveHeaderTitle">
                                    <h3>
                                        Intuition
                                    </h3>
                                </div>
                                <div>
                                    Drives {character.Stats.Intuition.intuitionDrive.value}
                                </div>
                            </div>
                            <p className='statItem'>Survey: {
                                character.Stats.Intuition.survey.value
                            }</p>
                            {character.Stats.Intuition.survey.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>
                            <p className='statItem'>Focus: {
                                character.Stats.Intuition.focus.value
                            }</p>
                            {character.Stats.Intuition.focus.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>
                            <p className='statItem'>Sense: {
                                character.Stats.Intuition.sense.value
                            }</p>
                            {character.Stats.Intuition.sense.Gilded ? "gilded" : null}
                            <div className='statValueContainer'>
                                <div className="statValue first"></div>
                                <div className="statValue second"></div>
                                <div className="statValue third"></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='rightContainer' >
                    <div className='characterAbilities'>
                        <h2>Other Details</h2>
                        <p>Role: {character.Role.title}</p>
                        <p>Role Abilities: </p>
                        {character.Role.abilities.map((title, index) => {
                            return (
                                <div key={index}>
                                    <p>
                                    {title.title}: {title.description}
                                    </p>
                                    </div>
                            )})}

                        <span>Specialty: {character.Specialty.title}</span>
                        <p>Specialty Abilities: </p>
                        {character.Specialty.abilities.map((title, index) => {
                            return (
                                <div key={index}>
                                    <p>
                                    {title.title}: {title.description}
                                    </p>
                                    </div>
                            )})}
                    </div>
                </div>
                <div className='characterMarks'>
                    <p>Body: {character.Marks.body}</p>
                    <p>Brain: {character.Marks.brain}</p>
                    <p>Bleed: {character.Marks.bleed}</p>
                    <p>Relationships: {character.Relationships.join(', ')}</p>
                    <p>Scars: {character.Scars}</p>
                </div>
            </div>




        </div>
    );
};

export default CharacterDetails;
