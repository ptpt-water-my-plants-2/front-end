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
        // setUsersPlants({ ...usersPlants, [e.target.name]: e.target.value });
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
    console.log(currentPlant, "current Plant")

    useEffect(() => {
        getPlantByID()
    }, [params.id])


    // Edit Plant PUT REQUEST
    const editplant = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/https://water-my-plants-app2.herokuapp.com/api/plants/${usersPlants.plantsId}`, inputs)
            .then((res) => {
                console.log(res);
                history.push('/');
                setInputs('');
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

    return (
        <div>
            <h1>{user.username}'s plant: </h1>
            <div className='user-info'>
                <div>
                    <p>Nickname: {(currentPlant) && currentPlant.nickname}</p>
                    <p>Species: {(currentPlant) && currentPlant.species}</p>
                    <p>H2O Frequency: {(currentPlant) && currentPlant.h2OFrequency}</p>
                    <p>Plant Owner: {(currentPlant) && user.username}</p>
                </div>
            </div>
            <div className='edit-form'>
                <h2>EDIT PLANT</h2>
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

                    <button className='editUserButton'>Submit Plant Updates</button>
                </form>
                <button onClick={() => deletePlantById()} className='deletePlantButton'>Delete Plant</button>
            </div>
        </div>
    )
}