import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
//import { axiosWithAuth } from '../utils/axiosWithAuth';
import { GlobalPropsContext } from '../GlobalPropsContext';

export default function EditPlant() {
    const { userPlants } = useContext(GlobalPropsContext);
    const params = useParams();
    const history = useHistory();
    const { inputs, setInputs } = useState({
      nickname: '',
      species: '',
      h2OFrequency: ''
    });
    // const initialPlantInputs = useState('');

    // useEffect(() => {
    //     axiosWithAuth()
    //       .get(``)
    //       .then((res) => {
    //         let newArr = res.data.filter((cls) => cls.id === parseInt(params.id));
    //         setInputs(newArr[0]);
    //       });
    //   }, [params.id, setInputs]);


    const handleChange = (e) => {
        // setUsersPlants({ ...usersPlants, [e.target.name]: e.target.value });
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };

      const editplant = (e) => {
        e.preventDefault();
        // axiosWithAuth()
        //   .put('', inputs)
        //   .then((res) => {
        //     console.log(res);
        //     history.push('');
        //     setInputs(initialFakePlantData);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      };

    return (
        <div>
            <h1>EDIT PLANT</h1>
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
                H2O Frequency
                <input
                    type="integer"
                    name="h20Frequency"
                    value={inputs.h2OFrequency}
                    onChange={handleChange}
                />
                </label>    
                
                <button>Edit Plant</button>
            </form>  
            
        </div>
    )
}