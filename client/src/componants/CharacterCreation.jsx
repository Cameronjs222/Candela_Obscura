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
  const [move, setMove] = useState(0);
  const [strike, setStrike] = useState(0);
  const [control, setControl] = useState(0);
  const [nerveDrive, setNerveDrive] = useState(0);
  const [sway, setSway] = useState(0);
  const [read, setRead] = useState(0);
  const [hide, setHide] = useState(0);
  const [cunningDrive, setCunningDrive] = useState(0);
  const [survey, setSurvey] = useState(0);
  const [focus, setFocus] = useState(0);
  const [sense, setSense] = useState(0);
  const [intuitionDrive, setIntuitionDrive] = useState(0);

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
      move: move,
      strike: strike,
      control: control,
      nerveDrive: nerveDrive,
      sway: sway,
      read: read,
      hide: hide,
      cunningDrive: cunningDrive,
      survey: survey,
      focus: focus,
      sense: sense,
      intuitionDrive: intuitionDrive
    },
    Role: role,
    Specialty: specialty
  };

  console.log(characterData);

  const pregenRoles = {
    Slink: {
      stats: {
        move: {value: 1, Gilded: false},
        strike: {value: 1, Gilded: false},
        control: {value: 1, Gilded: false},
        sway: {value: 1, Gilded: false},
        read: {value: 1, Gilded: false},
        hide: {value: 2, Gilded: true},
        survey: {value: 1, gilded: true},
        focus: {value: 1, Gilded: false},
        sense: {value: 0, Gilded: false}
      },
    },
    Scholar: {
      stats: {
        move: {value: 0, Gilded: false},
        strike: {value: 0, Gilded: false},
        control: {value: 1, Gilded: true},
        sway: {value: 2, Gilded: false},
        read: {value: 1, Gilded: false},
        hide: {value: 0, Gilded: false},
        survey: {value: 2, gilded: false},
        focus: {value: 2, Gilded: true},
        sense: {value: 1, Gilded: false}
      },
    },
    Face: {
      stats: {
        move: {value: 0, Gilded: false},
        strike: {value: 0, Gilded: false},
        control: {value: 1, Gilded: false},
        sway: {value: 2, Gilded: true},
        read: {value: 1, Gilded: false},
        hide: {value: 2, Gilded: true},
        survey: {value: 0, gilded: false},
        focus: {value: 1, Gilded: false},
        sense: {value: 2, Gilded: false}
      },
    },
    Weird: {
      stats: {
        move: {value: 0, Gilded: false},
        strike: {value: 1, Gilded: false},
        control: {value: 1, Gilded: false},
        sway: {value: 0, Gilded: false},
        read: {value: 2, Gilded: false},
        hide: {value: 1, Gilded: false},
        survey: {value: 0, gilded: false},
        focus: {value: 2, Gilded: true},
        sense: {value: 2, Gilded: true}
      }
    },
    Muscle: {
      stats: {
        move: {value: 2, Gilded: true},
        strike: {value: 2, Gilded: true},
        control: {value: 0, Gilded: false},
        sway: {value: 0, Gilded: false},
        read: {value: 1, Gilded: false},
        hide: {value: 1, Gilded: false},
        survey: {value: 2, gilded: false},
        focus: {value: 1, Gilded: false},
        sense: {value: 0, Gilded: false}
      }
    },
  
  }

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
      CharacterCreation
      <form action="" onSubmit={submitEvent}>
        <label htmlFor="Name">Characters name:</label>
        <input type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)} /><br />
        <label htmlFor="Pronouns">Character's Pronouns:</label>
        <input type="text" name="Pronouns" value={pronouns} onChange={(event) => setPronouns(event.target.value)} /><br />
        <label htmlFor="Style">Style:</label>
        <input type="text" name="Style" value={style} onChange={(event) => setStyle(event.target.value)} /><br />
        <label htmlFor="Catalyst">Character's Catalyst:</label>
        <input type="text" name="Catalyst" value={catalyst} onChange={(event) => setCatalyst(event.target.value)} /><br />
        <label htmlFor="Question">Question:</label>
        <input type="text" name="Question" value={question} onChange={(event) => setQuestion(event.target.value)} /><br />
        <label htmlFor="Circle">Circle:</label>
        <input type="text" name="Circle" value={circle} onChange={(event) => setCircle(event.target.value)} /><br />
        <label htmlFor="Role">Role:</label>
        <input type="text" name="Role" value={role} onChange={(event) => setRole(event.target.value)} /><br />
        <label htmlFor="Specialty">Specialty:</label>
        <input type="text" name="Specialty" value={specialty} onChange={(event) => setSpecialty(event.target.value)} /><br />
        <label htmlFor="move">Move:</label>
        <input type="number" name="move" value={move} onChange={(event) => setMove(parseInt(event.target.value))} /><br />
        <label htmlFor="strike">Strike:</label>
        <input type="number" name="strike" value={strike} onChange={(event) => setStrike(parseInt(event.target.value))} /><br />
        <label htmlFor="control">Control:</label>
        <input type="number" name="control" value={control} onChange={(event) => setControl(parseInt(event.target.value))} /><br />
        <label htmlFor="nerveDrive">Nerve's maximum drive:</label>
<input type="number" name="nerveDrive" value={nerveDrive} onChange={(event) => setNerveDrive(parseInt(event.target.value))} /><br />
<label htmlFor="sway">Characters sway:</label>
<input type="number" name="sway" value={sway} onChange={(event) => setSway(parseInt(event.target.value))} /><br />
<label htmlFor="read">Characters read:</label>
<input type="number" name="read" value={read} onChange={(event) => setRead(parseInt(event.target.value))} /><br />
<label htmlFor="hide">Characters hide:</label>
<input type="number" name="hide" value={hide} onChange={(event) => setHide(parseInt(event.target.value))} /><br />
<label htmlFor="cunningDrive">Cunning maximum drive:</label>
<input type="number" name="cunningDrive" value={cunningDrive} onChange={(event) => setCunningDrive(parseInt(event.target.value))} /><br />
<label htmlFor="survey">Characters survey:</label>
<input type="number" name="survey" value={survey} onChange={(event) => setSurvey(parseInt(event.target.value))} /><br />
<label htmlFor="focus">Characters focus:</label>
<input type="number" name="focus" value={focus} onChange={(event) => setFocus(parseInt(event.target.value))} /><br />
<label htmlFor="sense">Characters sense:</label>
<input type="number" name="sense" value={sense} onChange={(event) => setSense(parseInt(event.target.value))} /><br />
<label htmlFor="intuitionDrive">Intuition maximum drive:</label>
<input type="number" name="intuitionDrive" value={intuitionDrive} onChange={(event) => setIntuitionDrive(parseInt(event.target.value))} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CharacterCreation;
