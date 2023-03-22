import {useSelector} from "react-redux";
import ProfileForm from "./profile";

const ProfilePage = () => {
    const profileInfo = useSelector(state => state.profile)
    return (
        <ProfileForm person={profileInfo}/>
    )

}

export default ProfilePage;