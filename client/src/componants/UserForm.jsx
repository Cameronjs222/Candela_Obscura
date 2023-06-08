import axios from 'axios';
import React, {useState} from 'react'

const UserForm = () => {

    const [formState, setFormState] = useState({
        Email: '',
        UserName: '',
        Password: '',
        ConfirmPassword: ''
    })
    console.log(formState)

    const SubmitEvent = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users', formState)
    }

  return (
    <div>
        <form action="" onSubmit={SubmitEvent}>
        <h1>Create User</h1>
        <label htmlFor="Email">Email</label>
        <input type="text" name='Email'
        onChange={(e) => setFormState({...formState, Email: e.target.value})}
        value={formState.Email}
        />
        <label htmlFor="UserName">Username</label>
        <input type="text" name='UserName'
        onChange={(e) => setFormState({...formState, UserName: e.target.value})}
        value={formState.UserName}
        />
        <label htmlFor="Password">Password</label>
        <input type="text" name='Password'
        onChange={(e) => setFormState({...formState, Password: e.target.value})}
        value={formState.Password}
        />
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="text" name='ConfirmPassword'
        onChange={(e) => setFormState({...formState, ConfirmPassword: e.target.value})}
        value={formState.ConfirmPassword}
        />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm