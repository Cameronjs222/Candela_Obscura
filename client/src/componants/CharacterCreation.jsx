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
  const [roleAbilities, setRoleAbilities] = useState({});
  const [specialtyAbilities, setSpecialtyAbilities] = useState({});

  console.log(specialty)
  useEffect(() => {
    switch (role) {
      case 'Slink': {
        setMoveValue(1);
        setStrikeValue(1);
        setControlValue(1);
        setSwayValue(1);
        setReadValue(1);
        setHideValue(2);
        setSurveyValue(1);
        setFocusValue(1);
        setSenseValue(0);
        setNerveDriveValue(3);
        setCunningDriveValue(6);
        setIntuitionDriveValue(0);
        setRoleAbilities({
          "Title": "Scout",
          "Description": "If you have time to observe a location, you can spend 1 Intuition to ask a question: What do I notice here that others do not see? What in this place might be of use to us? What path should we follow?",
        });
        break;
      }
      case 'Scholar': {
        setMoveValue(0);
        setStrikeValue(0);
        setControlValue(1);
        setSwayValue(2);
        setReadValue(1);
        setHideValue(0);
        setSurveyValue(2);
        setFocusValue(2);
        setSenseValue(1);
        setNerveDriveValue(2);
        setCunningDriveValue(3);
        setIntuitionDriveValue(4);
        setRoleAbilities({
          "Title": "Well-Read",
          "Description": "You’re highly educated and retain knowledge better than most. When you use Intuition while making a roll, if you fail the roll, earn back any Intuition you used"
        });
        break;
      }
      case 'Face': {
        setMoveValue(0);
        setStrikeValue(0);
        setControlValue(1);
        setSwayValue(2);
        setReadValue(1);
        setHideValue(2);
        setSurveyValue(0);
        setFocusValue(1);
        setSenseValue(2);
        setNerveDriveValue(3);
        setCunningDriveValue(3);
        setIntuitionDriveValue(3);
        setRoleAbilities({
          "Title": "I know a guy",
          "Description": "Once per assignment, ask the GM who you know nearby that could help you. They will give you a temporary contact, and explain why they might have insight into the investigation."
        });
        break;
      }
      case 'Weird': {
        setMoveValue(0);
        setStrikeValue(1);
        setControlValue(1);
        setSwayValue(0);
        setReadValue(2);
        setHideValue(1);
        setSurveyValue(0);
        setFocusValue(2);
        setSenseValue(2);
        setNerveDriveValue(0);
        setCunningDriveValue(3);
        setIntuitionDriveValue(6);
        setRoleAbilities({
          "Title": "The Sight",
          "Description": "Whenever you take one or more Bleed marks, you also gain additional information about the phenomenon that harmed you. Ask the GM a question about the source of the bleed."
        });
        break;
      }
      case 'Muscle': {
        setMoveValue(2);
        setStrikeValue(2);
        setControlValue(0);
        setSwayValue(0);
        setReadValue(1);
        setHideValue(1);
        setSurveyValue(2);
        setFocusValue(1);
        setSenseValue(0);
        setNerveDriveValue(6);
        setCunningDriveValue(3);
        setIntuitionDriveValue(0);
        setRoleAbilities({
          "Title": "Brawler",
          "Description": "Spend 1 Nerve to choose an ally in the same area as you who is about to take a mark from a phenomenon. Describe what you do that allows you to take the mark instead."
        });
        break;
      }
    }
    switch (specialty) {
      case 'Criminal': {
        setSpecialtyAbilities([{
          "Title": "Street Smarts",
          "Description": " You know how to keep an eye on your surroundings. Whenever you make a Survey roll, you may spend any drive instead of only using Intuition."
        },
        {
          "Title": "Leverage",
          "Description": "On a successful Read roll, you may ask the GM what your target truly wants. On any Sway rolls you make using this information, also add your current Cunning resistance"
        }
        ]);
        break;
      }
      case 'Professor': {
        setSpecialtyAbilities([{
          "Title": "Steal mind",
          "Description": "Once per assignment, when you should take a Brain mark, you may instead spend 2 Intuition to negate it."
        },
        {
          "Title": "Chemical Concoction",
          "Description": "You know how to mix chemicals together to achieve particular effects. When you take Laboratory Equipment as gear, you may spend a few minutes concocting a mixture that is: acidic, explosive, flammable, loud, sleep-inducing, sticky, or toxic."
        }
        ]);
        break;
      }
      case 'Magician': {
        setSpecialtyAbilities([{
          "Title": "Misdirection",
          "Description": "When you use your words or actions to distract a target from what is actually happening, make a Hide roll. The first Cunning you or an ally spends on this roll is worth +2d instead of +1d."
        },
        {
          "Title": "The Prestige",
          "Description": " Your magic is usually all smoke and mirrors, but you do have one trick you’ve learned that’s real. Roll Sense when you perform it, and on a success, take a Bleed mark. Circle one option when you take this ability: change appearance, levitate, summon mundane object, teleport a short distance, throw your voice.."
        }
        ]);
        break;
      }
      case 'Occultist': {
        setSpecialtyAbilities([{
          "Title": "Ghostblade",
          "Description": "You can attune a ritual knife to yourself. If you coat it in your blood (take a Body mark), it can wound magickal beings and strike invisible or ethereal enemies."
        },
        {
          "Title": "Extend Your Senses",
          "Description": "When you roll with Sense to understand more about a phenomenon you’ve encountered, also add a number of dice equal to your current Intuition resistance to the roll."
        }
        ]);
        break;
      }
      case 'Explorer': {
        setSpecialtyAbilities([{
          "Title": "Tenacious",
          "Description": "When you have one or more Bleed marks, gild an additional die on Move, Strike, or Control rolls while in danger"
        },
        {
          "Title": "Field Experience",
          "Description": "You’ve traveled the world and been in many dangerous positions before. Once per assignment, describe to the group how a previous adventure is similar to your current situation and refresh 1 Nerve for everyone in your circle."
        }
        ]);
        break;
      }

    }
  }, [role, specialty]);

  console.log(roleAbilities);
  console.log(specialtyAbilities);


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


  const submitEvent = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8000/api/character/add', characterData)
      .then((response) => {
        console.log(response.data);
        Navigate('/characters/' + response.data._id);
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
        <input type="number" name="move" value={moveValue} onChange={(event) => setMoveValue(parseInt(event.target.value))} /><br />

        <label htmlFor="strikeValue">Strike:</label>
        <input type="number" name="strikeValue" value={strikeValue} onChange={(event) => setStrikeValue(parseInt(event.target.value))} /><br />

        <label htmlFor="controlValue">Control Value:</label>
        <input type="number" name="controlValue" value={controlValue} onChange={(event) => setControlValue(parseInt(event.target.value))} /><br />

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
