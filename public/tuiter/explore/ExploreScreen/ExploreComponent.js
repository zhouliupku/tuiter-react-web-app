import PostSummaryList from "../../PostSummaryList/index.js";
const ExploreComponent = () => {
    return (`
        <div class="row align-items-center">
                <div class="col-11">
                    <div class="border border-3 rounded-pill text-secondary white-background">
                        &nbsp &nbsp
                        <i class="fa-solid fa-magnifying-glass"></i>
                        &nbsp &nbsp &nbspSearch Twitter
                    </div>
                </div>

                <div class="col-1">
                    <i class="fa-solid fa-gear fa-lg float-end text-primary"></i>
                </div>
            </div>

            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div class="card mt-2">
                <div class="carousel-inner">
                    <img src="sapcexstarship.png" class="card-img-top" alt="...">
                    <div class="carousel-content">
                        <p class="h1"><b>SpaceX's Starship</b></p>

                    </div>

                </div>
            ${PostSummaryList()}
            </div>
             
    `)
}

export default ExploreComponent;