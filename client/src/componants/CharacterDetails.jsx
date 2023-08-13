import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
    const [character, setCharacter] = useState(null);
    const [gildedDice, setGildedDice] = useState(0);
    const [standardDice, setStandardDice] = useState(0);
    const [driveDice, setDriveDice] = useState(0);
    const [editing, setEditing] = useState("");
    const [notes, setNotes] = useState("");
    const [scars, setScars] = useState("");
    const [relationships, setRelationships] = useState("");
    const [gear, setGear] = useState("");
    const [editedScarIndex, setEditedScarIndex] = useState(null);
    const [editedRelationshipIndex, setEditedRelationshipIndex] = useState(null);
    const [editedGearIndex, setEditedGearIndex] = useState(null);
    const [resting, setResting] = useState(false);
    let { charId } = useParams();
    
    console.log(character);

    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/character/' + charId);
                setCharacter(response.data);
                setNotes(response.data.Notes);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCharacterData();
    }, []);
    
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

    const addItem = async (e, item) => {
        console.log(e, item);
        if (item === "Notes") {
        try {
            const updatedData = { ...character, [item]: e };
            const response = await axios.patch('http://localhost:8000/api/character/' + charId, updatedData);
            setCharacter({
                ...character,
                [item]: response.data[item] // Update local character state with the new item value
            });
            setEditing("None");
            setNotes(e); // If 'item' is 'Notes', you might want to set 'notes' here
        } catch (error) {
            console.log(error);
        }
    }
    else {
        try {   
            const updatedData = { ...character, [item]: [...character[item], e] };
            console.log(updatedData);
            console.log("^ is updatedData")
            const response = await axios.patch('http://localhost:8000/api/character/' + charId, updatedData);
            if (editing !== "oneScar") {
            setCharacter({
                ...character,
                [item]: response.data[item] // Update local character state with the new item value
            })};
            setEditing("None");
            setScars(e); // If 'item' is 'Notes', you might want to set 'notes' here
        }
        catch (error) {
            console.log(error);
        }
    }
    };

    const deleteItem = async (item, index) => {
        try {
            const updatedData = { ...character, [item]: [...character[item].slice(0, index), ...character[item].slice(index + 1)] };
            const response = await axios.patch('http://localhost:8000/api/character/' + charId, updatedData);
            setCharacter({
                ...character,
                [item]: response.data[item] // Update local character state with the new item value
            });
        } catch (error) {
            console.log(error);
        }
    };

    const saveEdit = () => {
        try {
            const response = axios.patch('http://localhost:8000/api/character/' + charId, character);
            setCharacter({
                ...character,
                [editing]: response.data[editing] // Update local character state with the new item value
            });
            setEditing("None");
        }
        catch (error) {
            console.log(error);
        }
    }

    const resetDrives = () => {
        const updatedCharacter = {
            ...character,
            Stats: {
                ...character.Stats,
                    Cunning: {
                        ...character.Stats.Cunning,
                            cunningDrive: {
                                ...character.Stats.Cunning.cunningDrive,
                                    value: character.Stats.Cunning.cunningDrive.maximum
                                }
                    },
                    Intuition: {
                        ...character.Stats.Intuition,
                            intuitionDrive: {
                                ...character.Stats.Intuition.intuitionDrive,
                                    value: character.Stats.Intuition.intuitionDrive.maximum
                            }
                    },
                    Nerve: {
                        ...character.Stats.Nerve,

                            nerveDrive: {
                                ...character.Stats.Nerve.nerveDrive,
                                    value: character.Stats.Nerve.nerveDrive.maximum
                            }
                    }
            }
        };
        setCharacter(updatedCharacter);
        axios.patch('http://localhost:8000/api/character/' + charId, updatedCharacter);
        };



    const resetMarks = () => {
        setCharacter({
            ...character, Stats: {
                ...character.Stats, Nerve: {
                    ...character.Stats.Nerve, NerveMark: {
                        ...character.Stats.Nerve.NerveMark, value: 0
                    }
                }
            }
        })
        setCharacter({
            ...character, Stats: {
                ...character.Stats, Cunning: {
                    ...character.Stats.Cunning, CunningMark: {
                        ...character.Stats.Cunning.CunningMark, value: 0
                    }
                }
            }
        })
        setCharacter({
            ...character, Stats: {
                ...character.Stats, Intuition: {
                    ...character.Stats.Intuition, IntuitionMark: {
                        ...character.Stats.Intuition.IntuitionMark, value: 0
                    }
                }
            }
        })
        axios.patch('http://localhost:8000/api/character/' + charId, character)
    }

    


        






    

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

                        {resting
                            ? <div className="resting">
                                <button className="" onClick={() => resetDrives()}>Reset Drives</button>
                                <button className="" onClick={() => resetMarks()}>Reset Marks</button>
                            </div>
                            : 
                            <div className="resting">
                            <p>Body: {character.Marks.body}</p>
                            <p>Brain: {character.Marks.brain}</p>
                            <p>Bleed: {character.Marks.bleed}</p>
                            </div>}

                        
                    <button className="showName" onClick={() => setResting(true)}>Rest</button>
                    </div>
                    <div className="characterMarksInfoContainer">
                    <div className="characterMarksInfoGear">
                        <span>Relationships: </span>
                        {editing === "Relationships"
                            ? <button onClick={() => { setEditing("None"); addItem(relationships, "Relationships") }}>Save Relationships</button>
                            : <button onClick={() => setEditing("Relationships")}>Edit Relationships</button>}
                        {editing === "Relationships"
                            ? <input className='' onChange={(e) => setRelationships(e.target.value)}></input>
                            : null}

                        {editing === "oneRelationship"
                            ? <div className='characterMarksInfoHeader'><button onClick={() => { setEditing("None"); saveEdit() }}>Save Relationship</button>
                                <button onClick={() => { setEditing("None"); deleteItem("Relationships", editedRelationshipIndex) }}>Delete Relationship</button></div>
                            : null}
                            
                        {editing === "oneRelationship"
                            ? <input className='' 
                            value={character.Relationships[editedRelationshipIndex]}
                            onChange={(e) => {
                                let uptatedRelationships = [...character.Relationships];
                                uptatedRelationships[editedRelationshipIndex] = e.target.value;
                                setCharacter({ ...character, Relationships: uptatedRelationships })
                                setRelationships(e.target.value)
                            }}></input>
                            : null}
                            {character.Relationships.map((relationship, index) => (
                                <p key={index} onClick={() => { setEditing("oneRelationship"); setEditedRelationshipIndex(index)}}>
                                    <span>{relationship}</span></p>
                            ))}
                    </div>
                        <div className="characterMarksInfoGear">
                            <span>Scars: </span>
                            {editing === "Scars" 
                            ? <button onClick={() => { setEditing("None"); addItem(scars, "Scars")}}>Save Scars</button> 
                            : <button onClick={() => setEditing("Scars")}>New Scar</button>}

                    
                            {editing === "Scars"
                            ? <input className='' onChange={(e) => setScars(e.target.value)}></input>
                            : null}

                            {editing === "oneScar"
                            ? <div className='characterMarksInfoHeader'><button onClick={() => { setEditing("None"); saveEdit() }}>Save Scar</button> 
                            <button onClick={() => { setEditing("None"); deleteItem("Scars", editedScarIndex) }}>Delete Scar</button></div>
                            : null}

                            {editing === "oneScar"
                            ? <input className='' value={character.Scars[editedScarIndex]} onChange={(e) => {
                                const updatedScars = [...character.Scars];
                                updatedScars[editedScarIndex] = e.target.value;
                                setCharacter({ ...character, Scars: updatedScars })
                                setScars(e.target.value);                   
                            }}></input>
                            : null}
                            {character.Scars.map((scar, index) => (
                                <p key={index} onClick={() => { setEditing("oneScar"); setEditedScarIndex(index); }}>
                                <span>{scar}</span>
                                </p>
                            ))}

                        </div>
                        <div className="characterMarksInfoGear">
                            <div className='characterMarksInfoHeader'>
                            <span>Notes: </span>
                            {editing === "Notes" 
                            ? <button onClick={() => { setEditing("None"); addItem(notes, "Notes") }}>Save Notes</button> 
                            : <button onClick={() => setEditing("Notes")}>Edit Notes</button>}
                            
                            </div>

                            {editing === "Notes" 
                            ? <textarea className='noteTextArea' onChange={(e) => setNotes(e.target.value)} value={notes}></textarea> 
                            : <span>{character.Notes}</span>}

                        </div>
                        <div className="characterMarksInfoGear">
                            <p>Gear:</p>
                            {editing === "Items"
                            ? <button onClick={() => { setEditing("None"); addItem(gear, "Items") }}>Save Gear</button>
                            : <button onClick={() => setEditing("Items")}>Edit Gear</button>}
                            {editing === "Items"
                            ? <input className='' onChange={(e) => setGear(e.target.value)}></input>
                            : null}

                            {editing === "oneItem"
                            ? <div className='characterMarksInfoHeader'><button onClick={() => { setEditing("None"); saveEdit() }}>Save Gear</button>
                            <button onClick={() => { setEditing("None"); deleteItem("Gear", editedGearIndex) }}>Delete Gear</button></div>
                            : null}

                            {editing === "oneItem"
                            ? <input className='' value={character.Items[editedGearIndex]} onChange={(e) => {
                                const updatedGear = [...character.Items];
                                updatedGear[editedGearIndex] = e.target.value;
                                setCharacter({ ...character, Items: updatedGear })
                                setGear(e.target.value);
                            }}></input>
                            : null}

                            {character.Items.map((gear, index) => (
                                <p key={index} onClick={() => { setEditing("oneItem"); setEditedGearIndex(index); }}>
                                    <span>{gear}</span>
                                </p>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default CharacterDetails;
