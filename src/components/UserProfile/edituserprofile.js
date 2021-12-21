import { useContext } from 'react';
import { GlobalPropsContext } from "../GlobalPropsContext"; 

// const fakeUser = {
//     username: 'idkw',
//     password: '1234',
//     phoneNumber: '123-555-6666'
// }

export default function CreatePlant() {
    const { user } = useContext(GlobalPropsContext);

    return (
        <div>
            <h1>USER PROFILE</h1>
            <p>Show all User's info and allow updating of password and phone number</p>
            <div className='user-info'>
                <p>Username: {user.username}</p>
                <p>Password: {user.password}</p>
                <p>Phone Number: {user.phoneNumber}</p>
            </div>
        </div>
    )
}