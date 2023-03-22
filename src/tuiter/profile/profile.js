import "./profile.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useNavigate} from "react-router";

const ProfileForm = ({
                         person = {
                             firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
                             profilePicture: 'profile1.png', bannerPicture: 'banner1.jpg',
                             bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
                             website: 'youtube.com/webdevtv',
                             location: 'Boston, MA', dateOfBirth: '7/7/1968', dateJoined: 'April 2009',
                             followingCount: 340, followersCount: 223
                         }
                     }) => {

    const navigate = useNavigate();
    const navigateToEdit = () => {
        navigate("/tuiter/profile/edit-profile")
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <div className="card">
                <img src={`/images/${person.bannerPicture}`} className="card-img-top" alt="..." height={300}/>
                    <div className="card-body">
                        <img src={`/images/${person.profilePicture}`} className="rounded-circle ms-2 portrait-location" width={150} height={150}/>
                        <button className="float-end btn btn-primary" onClick={navigateToEdit}>Edit Profile</button>
                        <h5>{person.name}</h5>
                        <p>{person.handle}</p>
                        <p>{person.bio}</p>
                        <div className="row">
                            <div className="col-4">
                                <FontAwesomeIcon icon="fa-solid fa-location-crosshairs" />
                                <span> {person.location}</span>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon="fa-solid fa-clock" />
                                <span> Born {person.dateOfBirth}</span>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                <span> Joined {person.dateJoined}</span>
                            </div>
                        </div>
                        <div>
                            <span className="fw-bold">{person.followingCount}</span>
                            <span> Following </span>
                            <span className="fw-bold ms-2">{person.followersCount}</span>
                            <span> Follower </span>
                        </div>
                    </div>
            </div>

        </div>


)

}

export default ProfileForm;