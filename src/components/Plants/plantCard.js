import { useState, useContext, } from "react";
import { Link } from "react-router-dom";
//import { GlobalPropsContext } from "../GlobalPropsContext";


export default function MyPlants(props) {

    return (
        <div className="plantCard">
            <h2>Plant Nickname: {props.eachPlant.nickname}</h2>
            {/* <img src={eachPlant.image} alt="coolImage" /> */}
            <h4>Species: {props.eachPlant.species}</h4>
            <h4>Water Every {props.eachPlant.h20Frequency} Days</h4>
            <Link to={`/details/${props.eachPlant.plantId}`}> <button className='detailsButton'>See Plant Details</button> </Link>
        </div>
    )
}
