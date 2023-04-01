import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
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
    const dispatch = useDispatch()
    return (
        <div className="row">
            <div className="col-2">
                <FontAwesomeIcon icon="fa-regular fa-comment" />
                {tuit.replies}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon="fa-solid fa-retweet" />
                {tuit.retuits}
            </div>
            <div className="col-3">

                    <i className="bi bi-heart-fill me-2 text-danger"
                    onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))}></i>
                {tuit.likes}

                {/*<>*/}
                {/*    {tuit.liked && <FontAwesomeIcon icon="fa-solid fa-heart" className="text-danger"/> }*/}
                {/*    {!tuit.liked && <FontAwesomeIcon icon="fa-solid fa-heart" />}*/}
                {/*</>*/}
                {/*{tuit.likes}*/}
            </div>
            <div className="col-3">

                <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"
                   onClick={() => dispatch(updateTuitThunk({
                       ...tuit,
                       dislikes: tuit.dislikes + 1
                   }))}></i>
                {tuit.dislikes}

            </div>
            <div className="col-2">
                <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
            </div>

        </div>
    )

}

export default TuitStats;