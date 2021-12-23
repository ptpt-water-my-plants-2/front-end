import { useContext, } from "react";
import { GlobalPropsContext } from "../GlobalPropsContext";
import PlantCard from "./plantCard"

export default function MyPlants() {
    const { usersPlants, user, IsFetchingUsersPlants } = useContext(GlobalPropsContext);

    return (
        <div>
            {user && <h1>{user.username}'s PLANTS</h1>}
            <div className="plantSection">
                {IsFetchingUsersPlants && <p>"Loading Plants..."</p>}
                {usersPlants && usersPlants.map((eachPlant) => (
                    <PlantCard eachPlant={eachPlant} key={eachPlant.plantId} />
                ))}
            </div>
        </div>
    )
}
