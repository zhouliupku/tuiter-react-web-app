import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";
import React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {findTuitsThunk} from "../../services/tuits-thunks";


export default function TuitList() {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])




    // const tuitsArr = useSelector(state => state.hometuits)

    return (
        <div>
        <ul className="list-group">
            {loading && <li className="list-group-item">
                Loading...
            </li>}
            {!loading && tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}

        </ul>
        </div>
    )
}