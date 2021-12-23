import React, { useState, useContext } from 'react';
import '../../App.css'
import { useHistory } from 'react-router-dom';
import { GlobalPropsContext } from '../GlobalPropsContext';
import axiosWithAuth from '../utils/axiosWithAuth';


export default function AddPlant() {
    const [inputs, setInputs] = useState({
        nickname: '',
        species: '',
        h2OFrequency: ''
    });
    const { usersPlants, setUsersPlants } = useContext(GlobalPropsContext);
    const history = useHistory();

    const handleChange = (e) => {
        // setUsersPlants({ ...usersPlants, [e.target.name]: e.target.value });
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    console.log(inputs);

    const postNewPlant = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://water-my-plants-app2.herokuapp.com/api/plants/', inputs)
            .then((res) => {
                console.log(res);
                setUsersPlants({
                    ...usersPlants,
                    nickname: inputs.nickname,
                    species: inputs.species,
                    h2OFrequency: inputs.h2OFrequency
                });
                setInputs({
                    ...inputs,
                    nickname: '',
                    species: '',
                    h2OFrequency: ''
                });
                history.push('/');

            })
            .catch((err) => {
                console.log(err);
            });
        // setUsersPlants({
        //     ...usersPlants,
        //     nickname: inputs.nickname,
        //     species: inputs.species,
        //     h2OFrequency: inputs.h2OFrequency
        // });
        // setInputs({
        //     ...inputs,
        //     nickname: '',
        //     species: '',
        //     h2OFrequency: ''
        // });

    };

    return (
        <div className="add-plant">
            <h1>ADD A NEW PLANT</h1>
            <form className="add-form otherForm" onSubmit={postNewPlant}>
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
                    Nickname:
                    <input
                        type="text"
                        name="nickname"
                        value={inputs.nickname}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Species:
                    <input
                        type="text"
                        name="species"
                        value={inputs.species}
                        onChange={handleChange}
                    />

                </label>
                {/* <label>

                </label>
                <label>

                    Owner
                    <input
                        type="integer"
                        name="owner"
                        value={inputs.owner}
                        onChange={handleChange}
                    />

                </label>  */}

                <label>
                    H2O Frequency:
                    <input
                        type="integer"
                        name="h2OFrequency"
                        value={inputs.h2OFrequency}
                        onChange={handleChange}
                    />
                </label>

                <button>Add Plant</button>
            </form>
        </div>
    )
}