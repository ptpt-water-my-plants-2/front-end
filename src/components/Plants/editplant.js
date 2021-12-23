import React, { useContext, useState } from 'react';
import "../../App.css"
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { GlobalPropsContext } from '../GlobalPropsContext';

export default function EditPlant() {
    const { usersPlants, user_id, user } = useContext(GlobalPropsContext);

    const history = useHistory();
    const [inputs, setInputs] = useState({
        nickname: '',
        species: '',
        h2OFrequency: ''
    });

    const handleChange = (e) => {
        // setUsersPlants({ ...usersPlants, [e.target.name]: e.target.value });
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    // GET PLANT BY ID POST REQUEST - (to display current plant information)



    // Edit Plant PUT REQUEST
    const editplant = (e) => {
        e.preventDefault();
        // axiosWithAuth()
        //     .put(`/https://water-my-plants-app2.herokuapp.com/api/plants/${usersPlants.plantsId}`, inputs)
        //     .then((res) => {
        //         console.log(res);
        //         history.push('/');
        //         setInputs('');
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };

    return (
        <div>
            {/* <h1>{usersPlants.nickname}</h1> */}
            <div className='user-info'>
                <div>
                    plant info will go here
                    {/* <p>Nickname: {usersPlants.nickname}</p>
                    <p>Species: {usersPlants.species}</p>
                    <p>H2O Frequency: {usersPlants.h2OFrequency}</p>
                    <p>Users Plant Id: {usersPlants.plantId}</p>
                    <p>Plant Owner: {usersPlants.plantId}</p> */}
                </div>
            </div>
            <div className='edit-form'>
                <h2>EDIT PLANT</h2>
                <form onSubmit={editplant} className='otherForm'>

                    {/* <label>
                Plant Id
                <input
                    type="integer"
                    name="plantId"
                    value={inputs.plantId}
                    onChange={handleChange}
                />
                </label>  */}
                    <label>
                        {/* Nickname */}
                        <input
                            placeholder='New Plant Nickname'
                            type="text"
                            name="nickname"
                            value={inputs.nickname}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        {/* Species */}
                        <input
                            placeholder='Change Species of Plant'
                            type="text"
                            name="species"
                            value={inputs.species}
                            onChange={handleChange}
                        />
                    </label>
                    {/* <label>
                Owner
                <input
                    type="integer"
                    name="owner"
                    value={inputs.owner}
                    onChange={handleChange}
                />
                </label>  */}
                    <label>
                        {/* H2O Frequency */}
                        <input
                            placeholder='Change H2O Frequency'
                            type="integer"
                            name="h2OFrequency"
                            value={inputs.h2OFrequency}
                            onChange={handleChange}
                        />
                    </label>

                    <button className='editUserButton'>Submit Plant Updates</button>
                </form>
            </div>
        </div>
    )
}