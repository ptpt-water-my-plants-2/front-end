import { useState, useContext } from 'react';
import { GlobalPropsContext } from "../GlobalPropsContext"; 

// const fakeUser = {
//     username: 'idkw',
//     password: '1234',
//     phoneNumber: '123-555-6666'
// }

export default function EditUserProfile() {
    const [userValues, setUserValues] = useState({
        password: '',
        phoneNumber: ''
    })
    const { user, setUser } = useContext(GlobalPropsContext);

    const handleChanges = e => {
        setUserValues({
            ...userValues,
            [e.target.name]: e.target.value
        })
    }

    // console.log(userValues);
    
    const editInfo = e => {
        e.preventDefault();
        setUserValues({
            ...userValues,
            password: '',
            phoneNumber: ''
        })
        setUser({
            ...user,
            password: userValues.password,
            phoneNumber: userValues.phoneNumber
        });
    }

    // console.log(user);

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
            {/* <div className='edit-button'>
                <button>Edit</button>
            </div> */}
            <div className='edit-form'>
                <h2>Edit Info</h2>
                <form onSubmit={editInfo}>
                    <label>
                        Password:
                        <input
                            type='password'
                            name='password'
                            onChange={handleChanges}
                            value={userValues.password}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type='text'
                            name='phoneNumber'
                            onChange={handleChanges}
                            value={userValues.phoneNumber}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}