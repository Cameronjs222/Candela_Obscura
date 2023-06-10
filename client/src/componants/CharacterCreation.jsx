import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CharacterCreation = () => {

  const Navigate = useNavigate();

  const { userId } = useParams();

  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [circle, setCircle] = useState('');
  const [style, setStyle] = useState('');
  const [catalyst, setCatalyst] = useState('');
  const [question, setQuestion] = useState('');
  const [role, setRole] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [moveValue, setMoveValue] = useState({ value: 0, Gilded: false });
  const [strikeValue, setStrikeValue] = useState({ value: 0, Gilded: false });
  const [controlValue, setControlValue] = useState({ value: 0, Gilded: false });
  const [nerveDriveValue, setNerveDriveValue] = useState({ value: 0, Gilded: false });
  const [swayValue, setSwayValue] = useState({ value: 0, Gilded: false });
  const [readValue, setReadValue] = useState({ value: 0, Gilded: false });
  const [hideValue, setHideValue] = useState({ value: 0, Gilded: false });
  const [cunningDriveValue, setCunningDriveValue] = useState({ value: 0, Gilded: false });
  const [surveyValue, setSurveyValue] = useState({ value: 0, Gilded: false });
  const [focusValue, setFocusValue] = useState({ value: 0, Gilded: false });
  const [senseValue, setSenseValue] = useState({ value: 0, Gilded: false });
  const [intuitionDriveValue, setIntuitionDriveValue] = useState({ value: 0, Gilded: false });
  const [roleAbilitiesTitle, setRoleAbilitiesTitle] = useState([]);
  const [roleAbilitiesDescription, setRoleAbilitiesDescription] = useState([]);
  const [specialtyAbilitiesTitle, setSpecialtyAbilitiesTitle] = useState([]);
  const [specialtyAbilitiesDescription, setSpecialtyAbilitiesDescription] = useState([]);

  console.log(specialtyAbilitiesTitle)
  console.log(roleAbilitiesTitle)
  console.log(roleAbilitiesDescription)
  useEffect(() => {
    switch (role) {
      case 'Slink': {
        setMoveValue({ value: 1, Gilded: false });
        setStrikeValue({ value: 1, Gilded: false });
        setControlValue({ value: 1, Gilded: false });
        setSwayValue({ value: 1, Gilded: false });
        setReadValue({ value: 1, Gilded: false });
        setHideValue({ value: 2, Gilded: true });
        setSurveyValue({ value: 1, Gilded: true });
        setFocusValue({ value: 1, Gilded: false });
        setSenseValue({ value: 0, Gilded: false });
        setNerveDriveValue({ value: 3, Gilded: false });
        setCunningDriveValue({ value: 6, Gilded: false });
        setIntuitionDriveValue({ value: 0, Gilded: false });
        setRoleAbilitiesTitle(["Scout"]);
        setRoleAbilitiesDescription(["If you have time to observe a location, you can spend 1 Intuition to ask a question: What do I notice here that others do not see? What in this place might be of use to us? What path should we follow?"]);
        break;
      }
      case 'Scholar': {
        setMoveValue({ value: 0, Gilded: false });
        setStrikeValue({ value: 0, Gilded: false });
        setControlValue({ value: 1, Gilded: true });
        setSwayValue({ value: 2, Gilded: false });
        setReadValue({ value: 1, Gilded: false });
        setHideValue({ value: 0, Gilded: false });
        setSurveyValue({ value: 2, Gilded: false });
        setFocusValue({ value: 2, Gilded: true });
        setSenseValue({ value: 1, Gilded: false });
        setNerveDriveValue({ value: 2, Gilded: false });
        setCunningDriveValue({ value: 3, Gilded: false });
        setIntuitionDriveValue({ value: 4, Gilded: false });
        setRoleAbilitiesTitle(["Well-Read"]);
        setRoleAbilitiesDescription(["You’re highly educated and retain knowledge better than most. When you use Intuition while making a roll, if you fail the roll, earn back any Intuition you used"]);
        break;
      }
      case 'Face': {
        setMoveValue({ value: 0, Gilded: false });
        setStrikeValue({ value: 0, Gilded: false });
        setControlValue({ value: 1, Gilded: false });
        setSwayValue({ value: 2, Gilded: true });
        setReadValue({ value: 1, Gilded: false });
        setHideValue({ value: 2, Gilded: true });
        setSurveyValue({ value: 0, Gilded: false });
        setFocusValue({ value: 1, Gilded: false });
        setSenseValue({ value: 2, Gilded: false });
        setNerveDriveValue({ value: 3, Gilded: false });
        setCunningDriveValue({ value: 3, Gilded: false });
        setIntuitionDriveValue({ value: 3, Gilded: false });
        setRoleAbilitiesTitle(["I know a guy"]);
        setRoleAbilitiesDescription(["Once per assignment, ask the GM who you know nearby that could help you. They will give you a temporary contact and explain why they might have insight into the investigation."]);
        break;
      }
      case 'Weird': {
        setMoveValue({ value: 0, Gilded: false });
        setStrikeValue({ value: 1, Gilded: false });
        setControlValue({ value: 1, Gilded: false });
        setSwayValue({ value: 0, Gilded: false });
        setReadValue({ value: 2, Gilded: false });
        setHideValue({ value: 1, Gilded: false });
        setSurveyValue({ value: 0, Gilded: false });
        setFocusValue({ value: 2, Gilded: false });
        setSenseValue({ value: 2, Gilded: false });
        setNerveDriveValue({ value: 0, Gilded: false });
        setCunningDriveValue({ value: 3, Gilded: true });
        setIntuitionDriveValue({ value: 6, Gilded: true });
        setRoleAbilitiesTitle(["The Sight"]);
        setRoleAbilitiesDescription(["Whenever you take one or more Bleed marks, you also gain additional information about the phenomenon that harmed you. Ask the GM a question about the source of the bleed."]);
        break;
      }
      case 'Muscle': {
        setMoveValue({ value: 2, Gilded: true });
        setStrikeValue({ value: 2, Gilded: true });
        setControlValue({ value: 0, Gilded: false });
        setSwayValue({ value: 0, Gilded: false });
        setReadValue({ value: 1, Gilded: false });
        setHideValue({ value: 1, Gilded: false });
        setSurveyValue({ value: 2, Gilded: false });
        setFocusValue({ value: 1, Gilded: false });
        setSenseValue({ value: 0, Gilded: false });
        setNerveDriveValue({ value: 6, Gilded: false });
        setCunningDriveValue({ value: 3, Gilded: false });
        setIntuitionDriveValue({ value: 0, Gilded: false });
        setRoleAbilitiesTitle(["Brawler"]);
        setRoleAbilitiesDescription(["Spend 1 Nerve to choose an ally in the same area as you who is about to take a mark from a phenomenon. Describe what you do that allows you to take the mark instead.", "Spend 1 Nerve to choose an ally in the same area as you who is about to take a mark from a phenomenon. Describe what you do that allows you to take the mark instead."]);
        break;
      }
    }
    
    switch (specialty) {
      case 'Criminal': {
        setSpecialtyAbilitiesTitle(["Street Smarts"]);
        setSpecialtyAbilitiesDescription([" You know how to keep an eye on your surroundings. Whenever you make a Survey roll, you may spend any drive instead of only using Intuition."]);
        break;
      }
      case 'Professor': {
        setSpecialtyAbilitiesTitle(["Steal mind"]);
        setSpecialtyAbilitiesDescription(["Once per assignment, when you should take a Brain mark, you may instead spend 2 Intuition to negate it."]);
        break;
      }
      case 'Magician': {
        setSpecialtyAbilitiesTitle(["Misdirection"]);
        setSpecialtyAbilitiesDescription(["When you use your words or actions to distract a target from what is actually happening, make a Hide roll. The first Cunning you or an ally spends on this roll is worth +2d instead of +1d."]);
        break;
      }
      case 'Occultist': {
        setSpecialtyAbilitiesTitle(["Ghostblade"]);
        setSpecialtyAbilitiesDescription(["You can attune a ritual knife to yourself. If you coat it in your blood (take a Body mark), it can wound magickal beings and strike invisible or ethereal enemies."]);
        break;
      }
      case 'Explorer': {
        setSpecialtyAbilitiesTitle(["Tenacious", "Survivalist"]);
        setSpecialtyAbilitiesDescription(["When you have one or more Bleed marks, gild an additional die on Move, Strike, or Control rolls while in danger", "When you have one or more Bleed marks, gild an additional die on Survey, Focus, or Sense rolls while in danger"]);
        break;
      }
    }
  }, [role, specialty]);

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
        move: moveValue,
        strike: strikeValue,
        controlValue: controlValue,
        nerveDrive: { value: nerveDriveValue.value, maximum: nerveDriveValue.value }
      },
      Cunning: {
        sway: swayValue,
        read: readValue,
        hide: hideValue,
        cunningDrive: { value: cunningDriveValue.value, maximum: cunningDriveValue.value }
      },
      Intuition: {
        survey: surveyValue,
        focus: focusValue,
        sense: senseValue,
        intuitionDrive: { value: intuitionDriveValue.value, maximum: intuitionDriveValue.value }
      }
    },
    Role: {
      title: role,
      abilities: roleAbilitiesTitle.map(
        (title, index) => ({ title: title, description: roleAbilitiesDescription[index] })
      )
    },
    Specialty: {
      title: specialty,
      abilities: specialtyAbilitiesTitle.map(
        (title, index) => ({ title: title, description: specialtyAbilitiesDescription[index] })
      )
    }
  };

  console.log(characterData.Specialty.abilities);
  const submitEvent = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8000/api/character/add', characterData)
      .then((response) => {
        console.log(response.data);
        Navigate('/characters/' + response.data._id);
      })
      .catch((error) => {
        console.error(error);
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

        <label htmlFor="Style">Style:</label>
        <input type="text" name="Style" value={style} onChange={(event) => setStyle(event.target.value)} /><br />

        <h2>Character Details</h2>

        <label htmlFor="Circle">Circle:</label>
        <input type="text" name="Circle" value={circle} onChange={(event) => setCircle(event.target.value)} /><br />

        <label htmlFor="Catalyst">Character's Catalyst:</label>
        <input type="text" name="Catalyst" value={catalyst} onChange={(event) => setCatalyst(event.target.value)} /><br />

        <label htmlFor="Question">Question:</label>
        <input type="text" name="Question" value={question} onChange={(event) => setQuestion(event.target.value)} /><br />

        <h2>Role and Specialty</h2>
        <label htmlFor="Role">Role:</label>
        <select type="text" name="Role" value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="None">None</option>
          <option value="Slink">Slink</option>
          <option value="Scholar">Scholar</option>
          <option value="Face">Face</option>
          <option value="Weird">Weird</option>
          <option value="Muscle">Muscle</option>
        </select><br />

        <label htmlFor="Specialty">Specialty:</label>
        <select type="text" name="Specialty" value={specialty} onChange={(event) => setSpecialty(event.target.value)}>
          <option value="None">None</option>
          {role === "Slink" ? <option value="Criminal">Criminal</option> : null}
          {role === "Scholar" ? <option value="Professor">Professor</option> : null}
          {role === "Face" ? <option value="Magician">Magician</option> : null}
          {role === "Weird" ? <option value="Occultist">Occultist</option> : null}
          {role === "Muscle" ? <option value="Explorer">Explorer</option> : null}
        </select><br />
        <h2>Stats</h2>
        <label htmlFor="moveValue">Move:</label>
        <input type="number" name="move" value={moveValue.value} onChange={(event) => setMoveValue({ ...moveValue, value: parseInt(event.target.value) })} />
        <label>
          Gilded:
          <input
            type="radio"
            name="moveGilded"
            checked={moveValue.Gilded}
            onChange={() => setMoveValue({ ...moveValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="moveGilded"
            checked={!moveValue.Gilded}
            onChange={() => setMoveValue({ ...moveValue, Gilded: false })}
          />
        </label>
        <br />

        <label htmlFor="strikeValue">Strike:</label>
        <input type="number" name="strikeValue" value={strikeValue.value} onChange={(event) => setStrikeValue({ ...strikeValue, value: parseInt(event.target.value) })} />
        <label>
          Gilded:
          <input
            type="radio"
            name="strikeGilded"
            checked={strikeValue.Gilded}
            onChange={() => setStrikeValue({ ...strikeValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="strikeGilded"
            checked={!strikeValue.Gilded}
            onChange={() => setStrikeValue({ ...strikeValue, Gilded: false })}
          />
        </label>
        <br />

        <label htmlFor="controlValue">Control Value:</label>
        <input type="number" name="controlValue" value={controlValue.value} onChange={(event) => setControlValue({ ...controlValue, value: parseInt(event.target.value) })} />
        <label>
          Gilded:
          <input
            type="radio"
            name="controlGilded"
            checked={controlValue.Gilded}
            onChange={() => setControlValue({ ...controlValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="controlGilded"
            checked={!controlValue.Gilded}
            onChange={() => setControlValue({ ...controlValue, Gilded: false })}
          />
        </label>
        <br />

        <label htmlFor="nerveDriveValue">Nerve's Maximum Drive:</label>
        <input type="number" name="nerveDriveValue" value={nerveDriveValue.value} onChange={(event) => setNerveDriveValue({...nerveDriveValue, value:parseInt(event.target.value)})} /><br />

        <label htmlFor="swayValue">Character's Sway Value:</label>
        <input type="number" name="swayValue" value={swayValue.value} onChange={(event) => setSwayValue({ ...swayValue, value: parseInt(event.target.value) })} />
        <label>
          Gilded:
          <input
            type="radio"
            name="swayGilded"
            checked={swayValue.Gilded}
            onChange={() => setControlValue({ ...swayValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="swayGilded"
            checked={!swayValue.Gilded}
            onChange={() => setSwayValue({ ...swayValue, Gilded: false })}
          />
        </label><br />

        <label htmlFor="readValue">Character's Read Value:</label>
        <input type="number" name="readValue" value={readValue.value} onChange={(event) => setReadValue({...readValue, value: parseInt(event.target.value)})} />
        <label>
          Gilded:
          <input
            type="radio"
            name="readGilded"
            checked={readValue.Gilded}
            onChange={() => setReadValue({ ...readValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="readGilded"
            checked={!readValue.Gilded}
            onChange={() => setReadValue({ ...readValue, Gilded: false })}
          />
        </label><br />

        <label htmlFor="hideValue">Character's Hide Value:</label>
        <input type="number" name="hideValue" value={hideValue.value} onChange={(event) => setHideValue({...hideValue, value: parseInt(event.target.value)})} />
        <label>
          Gilded:
          <input
            type="radio"
            name="hideGilded"
            checked={hideValue.Gilded}
            onChange={() => setHideValue({ ...hideValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="hideGilded"
            checked={!hideValue.Gilded}
            onChange={() => setHideValue({ ...hideValue, Gilded: false })}
          />
        </label><br />

        <label htmlFor="cunningDriveValue">Cunning's Maximum Drive:</label>
        <input type="number" name="cunningDriveValue" value={cunningDriveValue.value} onChange={(event) => setCunningDriveValue({...cunningDriveValue, value: parseInt(event.target.value)})} /><br />

        <label htmlFor="surveyValue">Character's Survey Value:</label>
        <input type="number" name="surveyValue" value={surveyValue.value} onChange={(event) => setSurveyValue({...surveyValue, value: parseInt(event.target.value)})} />
        <label>
          Gilded:
          <input
            type="radio"
            name="surveyGilded"
            checked={surveyValue.Gilded}
            onChange={() => setSurveyValue({ ...surveyValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="surveyGilded"
            checked={!surveyValue.Gilded}
            onChange={() => setSurveyValue({ ...surveyValue, Gilded: false })}
          />
        </label><br />

        <label htmlFor="focusValue">Character's Focus Value:</label>
        <input type="number" name="focusValue" value={focusValue.value} onChange={(event) => setFocusValue({...focusValue, value: parseInt(event.target.value)})} />
        <label>
          Gilded:
          <input
            type="radio"
            name="focusGilded"
            checked={focusValue.Gilded}
            onChange={() => setFocusValue({ ...focusValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="focusGilded"
            checked={!focusValue.Gilded}
            onChange={() => setFocusValue({ ...focusValue, Gilded: false })}
          />
        </label><br />

        <label htmlFor="senseValue">Character's Sense Value:</label>
        <input type="number" name="senseValue" value={senseValue.value} onChange={(event) => setSenseValue({...senseValue, value: parseInt(event.target.value)})} />
        <label>
          Gilded:
          <input
            type="radio"
            name="senseGilded"
            checked={senseValue.Gilded}
            onChange={() => setSenseValue({ ...senseValue, Gilded: true })}
          />
          Not Gilded:
          <input
            type="radio"
            name="senseGilded"
            checked={!senseValue.Gilded}
            onChange={() => setSenseValue({ ...senseValue, Gilded: false })}
          />
        </label><br />

        <label htmlFor="intuitionDriveValue">Intuition's Maximum Drive:</label>
        <input type="number" name="intuitionDriveValue" value={intuitionDriveValue.value} onChange={(event) => setIntuitionDriveValue({...intuitionDriveValue, value: parseInt(event.target.value)})} /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CharacterCreation;
