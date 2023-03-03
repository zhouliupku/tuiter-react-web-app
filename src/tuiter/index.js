
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";


function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {/*<ExploreComponent/>*/}
                {/*<HomeComponent />*/}
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>

            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>

        // <div>
        //     <Nav />
        //     <NavigationSidebar active="home"/>
        //     <WhoToFollowList />
        //     <PostSummaryList />
        //     <ExploreComponent />
        //     <h1>Tuiter</h1>
        //
        // </div>
    )
}

export default Tuiter;