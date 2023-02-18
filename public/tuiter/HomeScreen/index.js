import NavigationSidebar from "../NavigationSideBar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "./PostList/index.js";

function homeScreen() {
    $('#wd-home').append(
        `
<!--        <h2>Home Screen</h2>-->
        <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-2 col-xl-2">
    ${NavigationSidebar("Home")}
   </div>
   <div class="col-10 col-lg-5 col-xl-5">
    ${PostList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5">
   ${PostSummaryList()}

   </div>
  </div>
        `
    )
}

$(homeScreen());