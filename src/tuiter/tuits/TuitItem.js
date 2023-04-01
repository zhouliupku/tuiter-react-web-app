import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TuitStats from "./TuitStats";

import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
// import {deleteTuit} from "./hometuits-reducer";



const TuitItem = (
    {tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.jpg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "dislikes": 0,
        "handle": "@spacex",
        "content": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }}
) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id))
        // dispatch(deleteTuit(id))

    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img src={`/images/${tuit.image}`} className="rounded-circle float-end" height="30px" width="30px"/>
                </div>

                <div className="col-11">
                    <div>


                    <span>{tuit.userName}</span>
                    <span className="text-primary"> <FontAwesomeIcon icon="fa-regular fa-circle-check"/> </span>
                    <span className="text-secondary">{tuit.handle}</span>
                    <span> · </span>
                    <span className="text-secondary">{tuit.time}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <p>
                        {tuit.content}
                    </p>
                    <TuitStats tuit={tuit}/>

                </div>
            </div>
        </li>


    )

}

export default TuitItem;