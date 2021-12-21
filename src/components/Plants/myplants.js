import { useState, useContext, } from "react";
import { GlobalPropsContext } from "../GlobalPropsContext";
import PlantCard from "./plantCard"

export default function MyPlants() {
    const { usersPlants, user } = useContext(GlobalPropsContext);


    return (
        <div>
            {<h1>{user.username}'s PLANTS</h1>}
            <div className="plantSection">
                {console.log(usersPlants)}
                {/* isFetchingPlants ? "Loading Plants..." : */}
                {usersPlants.map((eachPlant) => (
                    <PlantCard eachPlant={eachPlant} key={eachPlant.plantId} />
                ))}
            </div>
        </div>
    )
}
