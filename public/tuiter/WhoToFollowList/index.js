
import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {

    return (`
        <ul class="list-group">
                <li class="list-group-item">
                    <b>Who to follow</b>
                </li>
                ${
        who.map(w => {
            return(WhoToFollowListItem(w))
        }).join("")
    }
                
        </ul>
    `)


}

export default WhoToFollowList;

function test() {
    $('#wd-follow').append(
        `${WhoToFollowList()}`
    )
}
$(test)