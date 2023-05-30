import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterCreation = () => {
  const { userId } = useParams();

  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [circle, setCircle] = useState('');
  const [style, setStyle] = useState('');
  const [catalyst, setCatalyst] = useState('');
  const [question, setQuestion] = useState('');
  const [role, setRole] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [moveValue, setMoveValue] = useState(0);
  const [strikeValue, setStrikeValue] = useState(0);
  const [controlValue, setControlValue] = useState(0);
  const [nerveDriveValue, setNerveDriveValue] = useState(0);
  const [swayValue, setSwayValue] = useState(0);
  const [readValue, setReadValue] = useState(0);
  const [hideValue, setHideValue] = useState(0);
  const [cunningDriveValue, setCunningDriveValue] = useState(0);
  const [surveyValue, setSurveyValue] = useState(0);
  const [focusValue, setFocusValue] = useState(0);
  const [senseValue, setSenseValue] = useState(0);
  const [intuitionDriveValue, setIntuitionDriveValue] = useState(0);

  const characterData = {
    User: userId,
    Information: {
      Name: name,
      Pronouns: pronouns,
      Circle: circle,
      Style: style,
      Catalyst: catalyst,
      Question: question
    },
    Stats: {
      Nerve: {
        move: { value: moveValue, Gilded: false },
        strike: { value: strikeValue, Gilded: false },
        controlValue: { value: controlValue, Gilded: false },
        nerveDrive: { value: nerveDriveValue, maximum: nerveDriveValue }
      },
      Cunning: {
        sway: { value: swayValue, Gilded: false },
        read: { value: readValue, Gilded: false },
        hide: { value: hideValue, Gilded: false },
        cunningDrive: { value: cunningDriveValue, maximum: cunningDriveValue }
      },
      Intuition: {
        survey: { value: surveyValue, Gilded: false },
        focus: { value: focusValue, Gilded: false },
        sense: { value: senseValue, Gilded: false },
        intuitionDrive: { value: intuitionDriveValue, maximum: cunningDriveValue }
      }
    },
    Role: role,
    Specialty: specialty
  };

  const pregenRoles = {
    Slink: {
      stats: {
        moveValue: { value: 1, Gilded: false },
        strikeValue: { value: 1, Gilded: false },
        controlValue: { value: 1, Gilded: false },
        swayValue: { value: 1, Gilded: false },
        readValue: { value: 1, Gilded: false },
        hideValue: { value: 2, Gilded: true },
        surveyValue: { value: 1, Gilded: true },
        focusValue: { value: 1, Gilded: false },
        senseValue: { value: 0, Gilded: false }
      }
    },
    Scholar: {
      stats: {
        moveValue: { value: 1, Gilded: false },
        strikeValue: { value: 0, Gilded: false },
        controlValue: { value: 1, Gilded: true },
        swayValue: { value: 2, Gilded: false },
        readValue: { value: 1, Gilded: false },
        hideValue: { value: 0, Gilded: false },
        surveyValue: { value: 2, Gilded: false },
        focusValue: { value: 2, Gilded: true },
        senseValue: { value: 1, Gilded: false }
      }
    },
    Face: {
      stats: {
        moveValue: { value: 1, Gilded: false },
        strikeValue: { value: 0, Gilded: false },
        controlValue: { value: 1, Gilded: false },
        swayValue: { value: 2, Gilded: true },
        readValue: { value: 1, Gilded: false },
        hideValue: { value: 2, Gilded: true },
        surveyValue: { value: 0, Gilded: false },
        focusValue: { value: 1, Gilded: false },
        senseValue: { value: 2, Gilded: false }
      }
    },
    Weird: {
      stats: {
        moveValue: { value: 1, Gilded: false },
        strikeValue: { value: 1, Gilded: false },
        controlValue: { value: 1, Gilded: false },
        swayValue: { value: 0, Gilded: false },
        readValue: { value: 2, Gilded: false },
        hideValue: { value: 1, Gilded: false },
        surveyValue: { value: 0, Gilded: false },
        focusValue: { value: 2, Gilded: true },
        senseValue: { value: 2, Gilded: true }
      }
    },
    Muscle: {
      stats: {
        moveValue: { value: 1, Gilded: true },
        strikeValue: { value: 2, Gilded: true },
        controlValue: { value: 0, Gilded: false },
        swayValue: { value: 0, Gilded: false },
        readValue: { value: 1, Gilded: false },
        hideValue: { value: 1, Gilded: false },
        surveyValue: { value: 2, Gilded: false },
        focusValue: { value: 1, Gilded: false },
        senseValue: { value: 0, Gilded: false }
      }
    }
  };

  const submitEvent = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8000/api/character/add', characterData)
      .then((response) => {
        console.log(response.data); // Optional: Handle the response data
        // Additional logic or redirect upon successful submission
      })
      .catch((error) => {
        console.error(error); // Optional: Handle the error
      });
  };

  return (
    <div>
      <h1>Character Creation</h1>
      <form onSubmit={submitEvent}>
        <h2>General Information</h2>
        <label htmlFor="Name">Character's Name:</label>
        <input type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)} /><br />
  
        <label htmlFor="Pronouns">Character's Pronouns:</label>
        <input type="text" name="Pronouns" value={pronouns} onChange={(event) => setPronouns(event.target.value)} /><br />
  
        <h2>Character Details</h2>
        <label htmlFor="Style">Style:</label>
        <input type="text" name="Style" value={style} onChange={(event) => setStyle(event.target.value)} /><br />
  
        <label htmlFor="Catalyst">Character's Catalyst:</label>
        <input type="text" name="Catalyst" value={catalyst} onChange={(event) => setCatalyst(event.target.value)} /><br />
  
        <label htmlFor="Question">Question:</label>
        <input type="text" name="Question" value={question} onChange={(event) => setQuestion(event.target.value)} /><br />
  
        <h2>Role and Specialty</h2>
        <label htmlFor="Role">Role:</label>
        <input type="text" name="Role" value={role} onChange={(event) => setRole(event.target.value)} /><br />
  
        <label htmlFor="Specialty">Specialty:</label>
        <input type="text" name="Specialty" value={specialty} onChange={(event) => setSpecialty(event.target.value)} /><br />
  
        <h2>Stats</h2>
        <label htmlFor="moveValue">Move:</label>
        <input type="number" name="move" value={moveValue} onChange={(event) => setMoveValue(parseInt(event.target.value))} /><br />
  
        <label htmlFor="strikeValue">Strike:</label>
        <input type="number" name="strikeValue" value={strikeValue} onChange={(event) => setStrikeValue(parseInt(event.target.value))} /><br />
  
        <label htmlFor="controlValue">Control Value:</label>
        <input type="number" name="controlValue" value={controlValue} onChange={(event) => setControlValue(parseInt(event.target.value))} /><br />
  
      {/* Rest of the input fields for stats */}
      <label htmlFor="nerveDriveValue">Nerve's Maximum Drive:</label>
      <input type="number" name="nerveDriveValue" value={nerveDriveValue} onChange={(event) => setNerveDriveValue(parseInt(event.target.value))} /><br />

      <label htmlFor="swayValue">Character's Sway Value:</label>
      <input type="number" name="swayValue" value={swayValue} onChange={(event) => setSwayValue(parseInt(event.target.value))} /><br />

      <label htmlFor="readValue">Character's Read Value:</label>
      <input type="number" name="readValue" value={readValue} onChange={(event) => setReadValue(parseInt(event.target.value))} /><br />

      <label htmlFor="hideValue">Character's Hide Value:</label>
      <input type="number" name="hideValue" value={hideValue} onChange={(event) => setHideValue(parseInt(event.target.value))} /><br />

      <label htmlFor="cunningDriveValue">Cunning's Maximum Drive:</label>
      <input type="number" name="cunningDriveValue" value={cunningDriveValue} onChange={(event) => setCunningDriveValue(parseInt(event.target.value))} /><br />

      <label htmlFor="surveyValue">Character's Survey Value:</label>
      <input type="number" name="surveyValue" value={surveyValue} onChange={(event) => setSurveyValue(parseInt(event.target.value))} /><br />

      <label htmlFor="focusValue">Character's Focus Value:</label>
      <input type="number" name="focusValue" value={focusValue} onChange={(event) => setFocusValue(parseInt(event.target.value))} /><br />

      <label htmlFor="senseValue">Character's Sense Value:</label>
      <input type="number" name="senseValue" value={senseValue} onChange={(event) => setSenseValue(parseInt(event.target.value))} /><br />

      <label htmlFor="intuitionDriveValue">Intuition's Maximum Drive:</label>
      <input type="number" name="intuitionDriveValue" value={intuitionDriveValue} onChange={(event) => setIntuitionDriveValue(parseInt(event.target.value))} /><br />

      <button type="submit">Submit</button> 
      </form>
    </div>
  );
};

export default CharacterCreation;
