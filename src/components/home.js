//import { useState, useContext } from "react"
import "../App.css"
import MyPlants from '../components/Plants/myplants'
//import { GlobalPropsContext } from "./GlobalPropsContext";
import WMPBanner from "../images/WMPBANNER2.jpg"


export default function HomeClient() {

    return (
        <div>
            <img alt="water my plant banner" className="wmpBanner" src={WMPBanner}></img>
            <MyPlants />
        </div>
    )
}