import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalPropsContext } from '../GlobalPropsContext';
// import { initialFakePlantData } from '../App';

export default function AddPlant() {
    const [inputs, setInputs] = useState({
        nickname: '',
        species: '',
        owner: '',
        h20Frequency: 0
    });
    // const [usersPlants, setUsersPlants] = useContext(GlobalPropsContext);
    const history = useHistory();

    const handleChange = (e) => {
        // setUsersPlants({ ...usersPlants, [e.target.name]: e.target.value });
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    console.log(inputs);

    //   const postNewPlant = (e) => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //       .post('', inputs)
    //       .then((res) => {
    //         console.log(res);
    //         history.push('');
    //         setInputs(initialFakePlantData);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };

    return (
        <div>
            <h1>ADD A NEW PLANT</h1>
            <form onSubmit={null}>
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
                    Nickname
                    <input
                        type="text"
                        name="nickname"
                        value={inputs.nickname}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Species
                    <input
                        type="text"
                        name="species"
                        value={inputs.species}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Owner
                    <input
                        type="integer"
                        name="owner"
                        value={inputs.owner}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    H20 Frequency
                    <input
                        type="integer"
                        name="h20Frequency"
                        value={inputs.h20Frequency}
                        onChange={handleChange}
                    />
                </label>

                <button>Add Class</button>
            </form>

        </div>
    )
}


