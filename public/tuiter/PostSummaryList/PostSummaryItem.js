const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">

                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary">${post.topic}</div>
                                <div><b>${post.userName}</b> &nbsp <i class="fa-solid fa-circle-check"></i>
                                    &nbsp <span class="text-secondary">-${post.time}</span></div>
                                <div><b>${post.title}</b></div>
                            </div>
                            <div class="col-2">
                                <img src=${post.image} class="rounded-3" height="60px" width="60px">

                            </div>

                        </div>


                    </li>
    `)
}

export default PostSummaryItem;

const data = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "image": "../react.png",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",

}

// function test() {
//     $('#wd-post').append(
//         `${PostSummaryItem(data)}`
//     )
// }
// $(test)