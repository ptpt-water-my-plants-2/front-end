import { useState, useContext, } from "react";
import { Link } from "react-router-dom";
//import { GlobalPropsContext } from "../GlobalPropsContext";


export default function PlantCard({ eachPlant }) {

    let d = (eachPlant.h2OFrequency < 2) ? "day" : "days"

    return (
        <div className="plantCard">
            <h2>Plant Nickname: {eachPlant.nickname}</h2>
            <h4>Species: {eachPlant.species}</h4>
            <h4>Needs Watered Every {eachPlant.h2OFrequency} {d}  </h4>
            <Link to={`/details/${eachPlant.plantId}`}> <button className='detailsButton'>See Plant Details</button> </Link>
        </div>
    )
}
