import '../../App.css'
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalPropsContext } from '../GlobalPropsContext';
import { addPlantSchema } from '../../validation/formSchemas';
import * as yup from 'yup';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function AddPlant() {
    const [inputs, setInputs] = useState({
        nickname: '',
        species: '',
        h2OFrequency: ''
    });
    const [inputErrors, setInputErrors] = useState({
        nickname: '',
        species: '',
        h2OFrequency: ''
    })
    const [disabled, setDisabled] = useState(true);
    const { usersPlants, setUsersPlants, user_id, getUsersPlants } = useContext(GlobalPropsContext);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;

        yup.reach(addPlantSchema, name)
            .validate(value)
            .then(() => {
                setInputErrors({ ...inputErrors, [name]: "" })
            })
            .catch(err => {
                setInputErrors({ ...inputErrors, [name]: err.message })
            });

        setInputs({
            ...inputs,
            [name]: value
        });
    };

    useEffect(() => {
        addPlantSchema
            .isValid(inputs)
            .then(isSchemaValid => {
                setDisabled(!isSchemaValid)
            })
    }, [inputs]);

    const updatesBeingSent = {
        nickname: inputs.nickname,
        species: inputs.species,
        h2OFrequency: inputs.h2OFrequency,
        owner: user_id
    }

    const postNewPlant = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://water-my-plants-app2.herokuapp.com/api/plants/', updatesBeingSent)
            .then((res) => {
                console.log(res);
                setInputs({
                    nickname: '',
                    species: '',
                    h2OFrequency: ''
                });
                getUsersPlants(user_id)
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="add-plant">
            <h1>ADD A NEW PLANT</h1>
            <form className="add-form otherForm" onSubmit={postNewPlant}>

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

                <label>
                    H2O Frequency:
                    <input
                        type="integer"
                        name="h2OFrequency"
                        value={inputs.h2OFrequency}
                        onChange={handleChange}
                    />
                </label>

                <button type='submit' disabled={disabled}>Add Plant</button>
            </form>
            <div className='errors'>
                <p>{inputErrors.nickname}</p>
                <p>{inputErrors.species}</p>
                <p>{inputErrors.h2OFrequency}</p>
            </div>
        </div>
    )
}