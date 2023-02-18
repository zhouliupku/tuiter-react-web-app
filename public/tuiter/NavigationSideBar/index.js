const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <li class="list-group-item ${active === 'Home'?"active" : ""}">
                        <div class="row">
                            <div class="col-2 col-xxl-2 col-xl-3">
                                <a href="../HomeScreen/index.html"><i class="fa-solid fa-house"></i></a>
                            </div>
                            <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                                <a href="../HomeScreen/index.html">Home</a>
                            </div>

                        </div>
                        </li>
                    <li class="list-group-item ${active === 'Explore'?"active" : ""}">
                        <div class="row">
                            <div class="col-2 col-xxl-2 col-xl-3">
                                <a href="../explore/index-a5.html"><i class="fa-solid fa-hashtag"></i></a>
                            </div>
                            <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                                <a href="../explore/index-a5.html">Explore</a>
                            </div>
                        </div>

                    <li class="list-group-item ${active === 'Notifications'?"active" : ""}">
                    <div class="row">
                        <div class="col-2 col-xxl-2 col-xl-3">
                            <i class="fa-sharp fa-solid fa-bell"></i>
                        </div>
                        <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                            Notifications
                        </div>
                    </div>
                    </li>
                    <li class="list-group-item ${active === 'Messages'?"active" : ""}">
                        <div class="row">
                            <div class="col-2 col-xxl-2 col-xl-3">
                                <i class="fa-sharp fa-solid fa-envelope"></i>
                            </div>
                            <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                                Messages
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item ${active === 'Bookmarks'?"active" : ""}">
                        <div class="row">
                            <div class="col-2 col-xxl-2 col-xl-3">
                                <i class="fa-solid fa-bookmark"></i>
                            </div>
                            <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                                Bookmarks
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item ${active === 'Lists'?"active" : ""}">
                        <div class="row">
                            <div class="col-2 col-xxl-2 col-xl-3">
                                <i class="fa-solid fa-list"></i>
                            </div>
                            <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                                Lists
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item ${active === 'Profile'?"active" : ""}">
                        <div class="row">
                            <div class="col-2 col-xxl-2 col-xl-3">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                                Profile
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item ${active === 'More'?"active" : ""}">
                        <div class="row">
                            <div class="col-2 col-xxl-2 col-xl-3">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                            <div class="col-10 col-xxl-10 col-xl-9 d-sm-none d-md-none d-lg-none d-xl-block">
                                More
                            </div>
                        </div>
                    </li>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

function test() {
    $('#wd-navigation').append(
        `${NavigationSidebar()}`
    )
}

$(test)

