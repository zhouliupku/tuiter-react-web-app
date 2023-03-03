import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostItem = (
    {post = {
        "userName": "Elon Musk",
        "handle": "@elonmusk",
        "time": "23h",
        "portrait": "elonmusk.jpg",
        "summary": "Amazing show about @Inspiration4x mission!",
        "postPic": "inspiration4.jpg",
        "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "postContent": "From training to launch to landing, this all access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space... netflix.com",
        "comment": "4.2K",
        "forward": "3.5K",
        "like": "37.5K"
    }}
) => {
    return (

        <li className="list-group-item">
            <div className="text-secondary">
                <>
                {post.notification.length > 0 &&
                <span><FontAwesomeIcon icon="fa-solid fa-retweet" />{post.notification}</span>
                }
                </>

            </div>
            <div className="row">
                <div className="col-1">
                    <img src={`/images/${post.portrait}`} className="rounded-circle float-end" height="30px" width="30px" />
                </div>

                <div className="col-11">
                    <div className="row">
                        <div className="col-11">
                            <span>{post.userName}</span>
                            <span className="text-primary"> <FontAwesomeIcon icon="fa-regular fa-circle-check" /> </span>
                            <span className="text-secondary">{post.handle}</span>
                             <span> · </span>
                            <span className="text-secondary">{post.time}</span>
                            <p>{post.summary}
                                <span className="text-primary">{post.link}</span>
                            </p>

                        </div>
                        <div className="col-1">...</div>

                    </div>

                    <div className="card">
                        <img className="card-img-top" src={`/images/${post.postPic}`} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-title">{post.title}</p>
                                <p className="card-text">{post.postContent}</p>
                            </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <FontAwesomeIcon icon="fa-regular fa-comment" />
                            {post.comment}
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon="fa-solid fa-retweet" />
                            {post.forward}
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            {post.like}
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
                        </div>

                    </div>

                    <div>
                        <p className="text-primary mt-2">{post.others}</p>
                    </div>

                </div>


            </div>

        </li>


    )
}

export default PostItem;




