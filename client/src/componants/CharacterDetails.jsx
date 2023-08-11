import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
    const [character, setCharacter] = useState(null);
    const [gildedDice, setGildedDice] = useState(0);
    const [standardDice, setStandardDice] = useState(0);
    const [driveDice, setDriveDice] = useState(0);
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
        const statDrive = `${stat.toLowerCase()}Drive` //Will come out as nerveDrive or cunningDrive or intuitionDrive
        setDriveDice(driveDice + 1);
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

    const addDice = (stat, type) => {
        if (character.Stats[stat][type].Gilded) {
            setGildedDice(gildedDice + 1);
            setStandardDice(character.Stats[stat][type].value - 1)
        }
        else {
            setStandardDice(character.Stats[stat][type].value)
        }
    }

    const showCharacterInfo = () => {
        const elements = document.getElementsByClassName('characterInformation');
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].style.display === 'flex') {
                elements[i].style.display = 'none';
            }
            else {
                elements[i].style.display = 'flex';

            }
        }
    };

    return (
        <div className='mainContainer'>

            {standardDice > 0 || gildedDice > 0 || driveDice > 0
                ?
                <div className="diceContainer">
                    <div className="diceBox">
                        <span>Drive dice</span>
                        <span>{driveDice}</span>
                    </div>
                    <div className="diceBox">
                        <span>Standard dice</span>
                        <span>{standardDice}</span>
                    </div>
                    <div className="diceBox">
                        <span>Gilded dice</span>
                        <span>{gildedDice}</span>
                    </div>
                </div>
                :
                <div className="characterInfoContainer">
                    <div className="characterInformation left" >
                        <span>Name: {character.Information.Name}</span>
                        <span>Pronouns: {character.Information.Pronouns}</span>
                        <span>Circle: {character.Information.Circle}</span>
                    </div>
                    <div class="titleHeader">
                        <span>Candela</span>
                        <span>Obscura</span>
                    </div>
                    <div className='characterInformation right'>
                        <span>Style: {character.Information.Style}</span>
                        <span>Catalyst: {character.Information.Catalyst}</span>
                        <span>Question: {character.Information.Question}</span>
                    </div>
                </div>
            }



            <div className="characterSheet">
                <div className="characterStats">
                    <button className="showName" onClick={() => showCharacterInfo()}>Show Info</button>
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
                    <div className="nerve statContainer">
                        <div className="statName" onClick={
                            () => { addDice("Nerve", "move") }
                        }>
                            {character.Stats.Nerve.move.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Move: {character.Stats.Nerve.move.value}</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Nerve.move.value)}
                        </div>
                        <div className="statName">
                            {character.Stats.Nerve.strike.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Strike: {
                                character.Stats.Nerve.strike.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Nerve.strike.value)}
                        </div>
                        {character.Stats.Nerve.strike.Gilded ? "gilded" : null}
                        <div className="statName">
                            {character.Stats.Nerve.control.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Control: {
                                character.Stats.Nerve.control.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Nerve.control.value)}
                        </div>
                    </div>
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
                    <div className="cunning statContainer">
                        <div className="statName">
                            {character.Stats.Cunning.sway.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Sway: {
                                character.Stats.Cunning.sway.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Cunning.sway.value)}
                        </div>
                        <div className="statName">
                            {character.Stats.Cunning.read.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Read: {
                                character.Stats.Cunning.read.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Cunning.read.value)}
                        </div>
                        <div className="statName" onClick={
                            () => { addDice("Cunning", "hide") }
                        }>
                            {character.Stats.Cunning.hide.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Hide: {
                                character.Stats.Cunning.hide.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Cunning.hide.value)}
                        </div>
                    </div>
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
                    <div className="intuition statContainer">
                        <div className="statName">
                            {character.Stats.Intuition.survey.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Survey: {
                                character.Stats.Intuition.survey.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Intuition.survey.value)}
                        </div>
                        <div className="statName">
                            {character.Stats.Intuition.focus.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Focus: {
                                character.Stats.Intuition.focus.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Intuition.focus.value)}
                        </div>
                        <div className="statName">
                            {character.Stats.Intuition.sense.Gilded ? <div className="Gilded"></div> : <div className="GildedBlank"></div>}
                            <span className='statItem'>Sense: {
                                character.Stats.Intuition.sense.value
                            }</span>
                        </div>
                        <div className="statValueDivContainer">
                            {generateDivs(character.Stats.Intuition.sense.value)}
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
                    <div className="characterMarksStats">

                        <p>Body: {character.Marks.body}</p>
                        <p>Brain: {character.Marks.brain}</p>
                        <p>Bleed: {character.Marks.bleed}</p>
                    </div>
                    <div className="characterMarksInfoContainer">
                    <div className="characterMarksInfoGear">
                        <p>Relationships: </p>
                            {character.Relationships.map((relationship, index) => (
                                <p key={index}><span>{relationship}</span></p>
                            ))}
                    </div>
                        <div className="characterMarksInfoGear">
                            <p>Scars: </p>
                            {character.Scars.map((scar, index) => (
                                <p key={index}><span>{scar}</span></p>
                            ))}
                        </div>
                        <div className="characterMarksInfoGear">
                            <p>Notes: </p>
                            <span>{character.Notes}</span>
                        </div>
                        <div className="characterMarksInfoGear">
                            <p>Gear:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default CharacterDetails;
