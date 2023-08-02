import './App.css';
import CharacterDetails from './componants/CharacterDetails';
import CharacterCreation from './componants/CharacterCreation';
import SelectUser from './componants/SelectUser';
import SelectCharacter from './componants/SelectCharacter';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import UserForm from './componants/UserForm';

function App() {

  const [activeUser, setActiveUser] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SelectUser/>}></Route>
            <Route path='/characters/all/:userId' element={<SelectCharacter/>}></Route>
            <Route path='/characters/:charId' element={<CharacterDetails/>}></Route>
            <Route path='/characters/new/:userId' element={<CharacterCreation/>}></Route>
            <Route path='/users/new' element={<UserForm/>}></Route>
            <Route path='/characters/edit/:charId' element={<CharacterCreation/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
