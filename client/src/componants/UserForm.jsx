import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const UserForm = () => {

  const Navigate = useNavigate();

    const [formState, setFormState] = useState({
        Email: '',
        UserName: '',
        Password: '',
        ConfirmPassword: ''
    })

    const [loginState, setLoginState] = useState({
        Email: '',
        Password: ''
    })
    console.log(loginState)
    console.log(formState)

    const SubmitEvent = (e) => {
        e.preventDefault();
        // check if the passwords match
        if(formState.Password !== formState.ConfirmPassword){
          console.log("Passwords do not match")
          return;
        }
        // hash the password
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(formState.Password, salt);
        // set the password to the hash
        // formState.Password = hash;
        // formState.ConfirmPassword = hash;

        axios.post('http://localhost:8000/api/users', formState)
        .then((res) => {
            console.log(res.data._id + "User Created")
            // Navigate('/characters/all/' + res.data._id)
        })
    }
    const loginEvent = (e) => {
      console.log(loginState)
      e.preventDefault();
      axios.get('http://localhost:8000/api/users/email/' + loginState.Email)
      .then((res) => {
        console.log(res.data)
        // if(!bcrypt.compareSync(loginState.Password, res.data.Password)){
        //   console.log("Passwords do not match")
        //   return;
        // }
        // else {
        //   Navigate('/characters/all/' + res.data._id)
        // }
      })

    } 


  return (
    <div className='mainCharacterSelectContainer'>
    <div className='creationContainer'>
        <form action="" onSubmit={SubmitEvent}>
        <h1>Create User</h1>
        <label htmlFor="Email">Email</label>
        <input className='input' type="text" name='Email'
        onChange={(e) => setFormState({...formState, Email: e.target.value})}
        value={formState.Email}
        />
        <label htmlFor="UserName">Username</label>
        <input className='input' type="text" name='UserName'
        onChange={(e) => setFormState({...formState, UserName: e.target.value})}
        value={formState.UserName}
        />
        <label htmlFor="Password">Password</label>
        <input className='input' type="text" name='Password'
        onChange={(e) => setFormState({...formState, Password: e.target.value})}
        value={formState.Password}
        />
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input className='input' type="text" name='ConfirmPassword'
        onChange={(e) => setFormState({...formState, ConfirmPassword: e.target.value})}
        value={formState.ConfirmPassword}
        />
        <button>Submit</button>
        </form>
    </div>
    <div className="creationContainer">
        <h1>Login</h1>
        <form action="" onSubmit={loginEvent}>
        <label htmlFor="Email">Email</label>
        <input className='input' type="text" name='Email' onChange={(e) => setLoginState({...loginState, Email: e.target.value})}/>
        <label htmlFor="Password">Password</label>
        <input className='input' type="text" name='Password' onChange={(e) => setLoginState({...loginState, Password: e.target.value})}/>
        <button>Login</button>
        </form>
    </div>
    </div>
  )
}

export default UserForm