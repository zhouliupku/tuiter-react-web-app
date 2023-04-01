
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";

import whoReducer from "./reducers/who-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import tuitsReducer from "./tuits/tuits-reducer";
import hometuitsReducer from "./tuits/hometuits-reducer";
import TuitList from "./tuits/TuitsList";
import ProfileForm from "./profile/profile";
import profileReducer from "./profile/profile-reducer";
import ProfilePage from "./profile/profile-page";
import EditProfileForm from "./profile/edit-profile";

const store = configureStore({
    reducer: {
        who: whoReducer,
        tuits: tuitsReducer,
        tuitsData: hometuitsReducer,
        profile: profileReducer
    }
});


function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {/*<ExploreComponent/>*/}
                {/*<HomeComponent />*/}
                <Routes>
                    <Route path="/"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfilePage/>}/>
                    <Route path="profile/edit-profile" element={<EditProfileForm />} />

                </Routes>

            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>


    )
}

export default Tuiter;