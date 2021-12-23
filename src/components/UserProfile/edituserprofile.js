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
            <h1>{user.username}'s PROFILE</h1>
            <div className='user-info'>
                <div>
                    <p>Username: {user.username}</p>
                    <p>Phone Number: {user.phoneNumber}</p>
                    <p>User Id: {user.user_id}</p>
                </div>
            </div>

            <div className='edit-form'>
                <h2>Update Your User Information:</h2>
                <form onSubmit={editInfo} className='otherForm'>
                    <label>
                        {/* <p>Password:</p> */}
                        <input
                            placeholder="new password"
                            type='password'
                            name='password'
                            onChange={handleChanges}
                            value={userValues.password}
                        />
                    </label>
                    <label>
                        {/* <p> Phone Number: </p> */}
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