import { useContext, } from "react";
import { GlobalPropsContext } from "../GlobalPropsContext";
import PlantCard from "./plantCard"

export default function MyPlants() {
    const { usersPlants, user, IsFetchingUsersPlants } = useContext(GlobalPropsContext);

    const userNameCapitalized = user.username.charAt(0).toUpperCase() + user.username.slice(1)
    return (
        <div>
            {user && <h1>{userNameCapitalized}'s PLANTS</h1>}
            <div className="plantSection">
                {IsFetchingUsersPlants && <p>"Loading Plants..."</p>}
                {usersPlants && usersPlants.map((eachPlant) => (
                    <PlantCard eachPlant={eachPlant} key={eachPlant.plantId} />
                ))}
            </div>
        </div>
    )
}
