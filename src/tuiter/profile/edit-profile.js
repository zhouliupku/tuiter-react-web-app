import React, {useState} from "react";
import {TextField} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {editProfile} from "./profile-reducer";
import {useDispatch} from "react-redux";


const EditProfileForm = () => {
    const info = useSelector(state => state.profile)
    let [newName, setNewName] = useState("")
    let [newBio, setNewBio] = useState("")
    let [newLocation, setNewLocation] = useState("")
    let [newWebsite, setNewWebsite] = useState("")
    let [newBirthDate, setNewBirthDate] = useState("")

    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate("/tuiter/profile")
    }

    const dispatch = useDispatch();
    const saveHandler = () => {
        const changeContext = {
            name: newName,
            bio: newBio,
            location: newLocation,
            website: newWebsite,
            dateOfBirth: newBirthDate
        }
        dispatch(editProfile(changeContext))
        navigateToProfile();
    }




    return (
        <div>
            <div className="row">
                <div className="col-2"><i className="bi bi-x-lg float-start" onClick={navigateToProfile}></i></div>
                <div className="col-6"><h4>Edit Profile</h4></div>
                <div className="col-4"><button className="float-end btn btn-success" onClick={saveHandler}>Save</button></div>
            </div>
            <div className="card mt-2">
                <img src={"/images/banner1.jpg"} className="card-img-top" alt="..." height={300}/>
                <div className="card-body">
                    <img src={"/images/profile1.png"} className="rounded-circle ms-2 portrait-location" width={150} height={150}/>
                    <TextField label="Name" fullWidth defaultValue={info.name} margin="normal"
                               onChange={(event) => {setNewName(event.target.value)}}/>
                    <TextField label="Bio" fullWidth defaultValue={info.bio} margin="normal"
                               onChange={(event) => {setNewBio(event.target.value)}}/>
                    <TextField label="Location" fullWidth defaultValue={info.location} margin="normal"
                               onChange={(event) => {setNewLocation(event.target.value)}}/>
                    <TextField label="Website" fullWidth defaultValue={info.website} margin="normal"
                               onChange={(event) => {setNewWebsite(event.target.value)}}/>
                    <TextField label="Birth Date" fullWidth defaultValue={info.dateOfBirth} margin="normal"
                               onChange={(event) => {setNewBirthDate(event.target.value)}}/>

                </div>
            </div>

        </div>
    )
}

export default EditProfileForm;