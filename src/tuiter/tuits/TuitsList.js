import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";
import React from "react";


export default function TuitList() {
    const tuitsArr = useSelector(state => state.hometuits)

    return (
        <div>
        <h1>Home</h1>
        <ul className="list-group">
            {tuitsArr.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}

        </ul>
        </div>
    )
}