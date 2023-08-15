import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='userSelect'>
            <h1>User List</h1>
            {users.map(user => (
                <div key={user._id}>
                    <Link to={`/characters/all/${user._id}`}>{user.UserName}</Link>
                </div>
            ))}

        <Link to={`/users/new/`}>Create new user</Link>

        </div>
    );
};

export default UserList;
