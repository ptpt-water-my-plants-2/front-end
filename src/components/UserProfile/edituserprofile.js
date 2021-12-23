import { useState, useContext } from 'react';
import { GlobalPropsContext } from "../GlobalPropsContext";
import axiosWithAuth from '../utils/axiosWithAuth';

export default function EditUserProfile() {
    const [userValues, setUserValues] = useState({
        password: '',
        phoneNumber: ''
    })
    const { user, setUser, user_id, getUserInfo } = useContext(GlobalPropsContext);

    const handleChanges = e => {
        setUserValues({
            ...userValues,
            [e.target.name]: e.target.value
        })
    }

    const updatedInputs = {
        password: userValues.password,
        phoneNumber: userValues.phoneNumber
    };

    const editInfo = e => {
        e.preventDefault();
        axiosWithAuth().put(`https://water-my-plants-app2.herokuapp.com/api/users/${user_id}`, updatedInputs)
            .then(res => {
                setUserValues({
                    password: '',
                    phoneNumber: ''
                })
                getUserInfo(user_id).then((res) => {
                    console.log(res, "userInfo from login")
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>{user && user.username}'s PROFILE</h1>
            <div className='user-info'>
                <div>
                    <p>Username: {user && user.username}</p>
                    <p>Phone Number: {user && user.phoneNumber}</p>
                    <p>User Id: {user && user.user_id}</p>
                </div>
            </div>

            <div className='edit-form'>
                <h2>Update Your User Information:</h2>
                <form onSubmit={editInfo} className='otherForm'>
                    <label>
                        <input
                            placeholder="new password"
                            type='password'
                            name='password'
                            onChange={handleChanges}
                            value={userValues.password}
                        />
                    </label>
                    <label>
                        <input
                            placeholder="new phone number"
                            type='text'
                            name='phoneNumber'
                            onChange={handleChanges}
                            value={userValues.phoneNumber}
                        />
                    </label>
                    <button className="editUserButton">Submit</button>
                </form>
            </div>
        </div>
    )
}