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

    console.log(character);
    // console.log(character.Specialty.abilities[0].title);
    if (!character) {
        return <div>Loading...</div>;
    }

    const generateDivs = (count) => {
        const divs = [<div className="statValueDivBlank"></div>, <div className="statValueDivBlank"></div>, <div className="statValueDivBlank"></div>];
        for (let i = 0; i < count; i++) {
            divs.splice(i, 1, <div key={i} className="statValueDiv"></div>);
        }
        return divs;
    };

    const DriveActivation = (stat) => {
        const statDrive = `${stat.toLowerCase()}Drive`
        if (character.Stats[stat][statDrive].value > 0) {
            setCharacter({
                ...character, Stats: {
                    ...character.Stats, [stat]: {
                        ...character.Stats[stat], [statDrive]: {
                            ...character.Stats[stat][statDrive], value: character.Stats[stat][statDrive].value - 1
                        }
                    }
                }
            })
            axios.patch('http://localhost:8000/api/character/' + charId, {
                ...character, Stats: {

                    ...character.Stats, [stat]: {
                        ...character.Stats[stat], [statDrive]: {
                            ...character.Stats[stat][statDrive], value: character.Stats[stat][statDrive].value - 1
                        }
                    }
                }
            })
        }

    }


    return (
        <div className='mainContainer'>


            <div className="characterInfoContainer">
                <div className="characterInformation" >
                    <span>Name: {character.Information.Name}</span>
                    <span>Pronouns: {character.Information.Pronouns}</span>
                    <span>Circle: {character.Information.Circle}</span>
                </div>
                <div class="titleHeader">
                    <span>Candela</span>
                    <span>Obscura</span>
                </div>
                <div className='characterInformation'>
                    <span>Style: {character.Information.Style}</span>
                    <span>Catalyst: {character.Information.Catalyst}</span>
                    <span>Question: {character.Information.Question}</span>
                </div>
            </div>



            <div className="characterSheet">
                <div className="characterStats">
                    <div className="nerve statContainer">
                        <div className="statHeader">
                            <div className="HeaderTitle">
                                <h3>
                                    Nerve
                                </h3>
                            </div>
                            <div class="drives" onClick={() => DriveActivation("Nerve")}>
                                Drives {character.Stats.Nerve.nerveDrive.value}
                            </div>
                        </div>
                        <div className="statName">
                            {character.Stats.Nerve.move.Gilded ? <div className="Gilded"></div> : null}
                            <span className='statItem'>Move: {character.Stats.Nerve.move.value}</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Nerve.move.value)}
                        </div>
                        <div className="statName">
                            {character.Stats.Nerve.strike.Gilded ? <div className="Gilded"></div> : null}
                            <span className='statItem'>Strike: {
                                character.Stats.Nerve.strike.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Nerve.strike.value)}
                        </div>
                        {character.Stats.Nerve.strike.Gilded ? "gilded" : null}
                        <div className="statName">
                            {character.Stats.Nerve.control.Gilded ? <div className="Gilded"></div> : null}
                            <span className='statItem'>Control: {
                                character.Stats.Nerve.control.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Nerve.control.value)}
                        </div>
                        {character.Stats.Nerve.control.Gilded ? "gilded" : null}
                    </div>
                    <div className="cunning statContainer">
                        <div className="statHeader">
                            <div className="HeaderTitle">
                                <h3>
                                    Cunning
                                </h3>
                            </div>
                            <div class="drives" onClick={() => DriveActivation("Cunning")}>
                                Drives {character.Stats.Cunning.cunningDrive.value}
                            </div>
                        </div>
                        <div className="statName">
                            {character.Stats.Cunning.sway.Gilded ? <div className="Gilded"></div> : null}

                            <span className='statItem'>Sway: {
                                character.Stats.Cunning.sway.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Cunning.sway.value)}
                        </div>
                        {character.Stats.Cunning.sway.Gilded ? "gilded" : null}
                        <div className="statName">
                            <span className='statItem'>Read: {
                                character.Stats.Cunning.read.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Cunning.read.value)}
                        </div>
                        {character.Stats.Cunning.read.Gilded ? "gilded" : null}
                        <div className="statName">
                            <span className='statItem'>Hide: {
                                character.Stats.Cunning.hide.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Cunning.hide.value)}
                        </div>
                        {character.Stats.Cunning.hide.Gilded ? "gilded" : null}
                        <div className='statValueContainer'>
                            <div className="statValue first"></div>
                            <div className="statValue second"></div>
                            <div className="statValue third"></div>
                        </div>
                    </div>
                    <div className="intuition statContainer">
                        <div className="statHeader">
                            <div className="HeaderTitle">
                                <h3>
                                    Intuition
                                </h3>
                            </div>
                            <div class="drives" onClick={() => DriveActivation("Intuition")}>
                                Drives {character.Stats.Intuition.intuitionDrive.value}
                            </div>
                        </div>
                        <div className="statName">
                            <span className='statItem'>Survey: {
                                character.Stats.Intuition.survey.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Intuition.survey.value)}
                        </div>
                        {character.Stats.Intuition.survey.Gilded ? "gilded" : null}
                        <div className="statName">
                            <span className='statItem'>Focus: {
                                character.Stats.Intuition.focus.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Intuition.focus.value)}
                        </div>
                        {character.Stats.Intuition.focus.Gilded ? "gilded" : null}
                        <div className="statName">
                            <span className='statItem'>Sense: {
                                character.Stats.Intuition.sense.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Intuition.sense.value)}
                        </div>
                        {character.Stats.Intuition.sense.Gilded ? "gilded" : null}
                        <div className='statValueContainer'>
                            <div className="statValue first"></div>
                            <div className="statValue second"></div>
                            <div className="statValue third"></div>
                        </div>

                    </div>
                </div>
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
                        )
                    })}

                    <span>Specialty: {character.Specialty.title}</span>
                    <p>Specialty Abilities: </p>
                    {character.Specialty.abilities.map((title, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    {title.title}: {title.description}
                                </p>
                            </div>
                        )
                    })}
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
