import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {

    return (`
        <ul class="list-group list-group-flush">
            ${
        posts.map(post => {
            return (PostSummaryItem(post))
        }).join("")
        
    }
        </ul>
    `)

}

export default PostSummaryList;

function test() {
    $('#wd-post').append(
        `${PostSummaryList()}`
    )
}
$(test)