import React, { useContext, useEffect, useState } from 'react';
import "../../App.css"
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { GlobalPropsContext } from '../GlobalPropsContext';

export default function EditPlant() {
    const { usersPlants, user_id, user, getUsersPlants } = useContext(GlobalPropsContext);
    const [currentPlant, setCurrentPlant] = useState(null)
    const params = useParams();
    const history = useHistory();
    const [inputs, setInputs] = useState({
        nickname: '',
        species: '',
        h2OFrequency: ''
    });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    // GET PLANT BY ID POST REQUEST - (to display current plant information)
    const getPlantByID = async () => {
        axiosWithAuth()
            .get(`https://water-my-plants-app2.herokuapp.com/api/plants/${params.id}`)
            .then((res) => {
                console.log(res);
                setCurrentPlant(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getPlantByID()
    }, [params.id])

    const updateValues = {
        nickname: inputs.nickname,
        species: inputs.species,
        h2OFrequency: inputs.h2OFrequency,
        owner: user_id
    };

    // Edit Plant PUT REQUEST
    const editplant = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://water-my-plants-app2.herokuapp.com/api/plants/${params.id}`, updateValues)
            .then((res) => {
                getUsersPlants(user_id);
                getPlantByID(params.id);
                setInputs({
                    nickname: '',
                    species: '',
                    h2OFrequency: ''
                });
                // history.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // DELETE PLANT BY ID

    const deletePlantById = () => {
        axiosWithAuth()
            .delete(`https://water-my-plants-app2.herokuapp.com/api/plants/${params.id}`)
            .then((res) => {
                console.log(res, "delete this plant");
                getUsersPlants(user_id)
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    let d = currentPlant && (currentPlant.h2OFrequency < 2) ? "day" : "days"

    let capitalizedUser = user.username.charAt(0).toUpperCase() + user.username.slice(1)

    return (
        <div>
            <h1 className="updateH1">{capitalizedUser}'s plant: </h1>
            <div className='user-info'>
                <div>
                    <p>Nickname: {(currentPlant) && currentPlant.nickname}</p>
                    <p>Species: {(currentPlant) && currentPlant.species}</p>
                    <p>H2O Frequency: Every {(currentPlant) && currentPlant.h2OFrequency} {d}</p>
                    <p>Plant Owner: {(currentPlant) && user.username}</p>
                </div>
            </div>
            <div className='edit-form'>
                <h2 className="updateH2">EDIT PLANT</h2>
                <form onSubmit={editplant} className='otherForm'>

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

                    <button className='editUserButton'>Submit Updates</button>
                </form>
                <button onClick={() => deletePlantById()} className='deletePlantButton'>Delete Plant</button>
            </div>
        </div>
    )
}