const fakeUser = {
    username: 'idkw',
    password: '1234',
    phoneNumber: '123-555-6666'
}

export default function CreatePlant() {

    return (
        <div>
            <h1>USER PROFILE</h1>
            <p>Show all User's info and allow updating of password and phone number</p>
            <div className='user-info'>
                <p>Username: {fakeUser.username}</p>
                <p>Password: {fakeUser.password}</p>
                <p>Phone Number: {fakeUser.phoneNumber}</p>
            </div>
        </div>
    )
}