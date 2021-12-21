import { useState, useContext } from 'react';
import { GlobalPropsContext } from "../GlobalPropsContext"; 

// const fakeUser = {
//     username: 'idkw',
//     password: '1234',
//     phoneNumber: '123-555-6666'
// }

export default function EditUserProfile() {
    const [userValues, setUserValues] = useState({
        username: '',
        password: '',
        phoneNumber: ''
    })
    const { user } = useContext(GlobalPropsContext);

    return (
        <div>
            <h1>USER PROFILE</h1>
            <p>Show all User's info and allow updating of password and phone number</p>
            <div className='user-info'>
                <div>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.password}</p>
                    <p>Phone Number: {user.phoneNumber}</p>
                </div>
            </div>
            <div className='edit-button'>
                <button>Edit</button>
            </div>
            <div className='edit-form'>
                <form>
                    <label>
                        Username:
                        <input
                            type='text'
                            name='username'
                            onChange={null}
                            value={userValues.username}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type='text'
                            name='password'
                            onChange={null}
                            value={userValues.password}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type='text'
                            name='phoneNumber'
                            onChange={null}
                            value={userValues.phoneNumber}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}