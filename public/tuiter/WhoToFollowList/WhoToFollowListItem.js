

const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col-2">
                            <img src=${who.avatarIcon} class="rounded-circle" height="40px" width="40px">
                        </div>
                        <div class="col-6">
                            <div><b>${who.userName}</b> <i class="fa-solid fa-circle-check"></i></div>
                            <div>@${who.handle}</div>
                        </div>
                        <div class="col-4">
                            <button type="button" class="btn btn-primary float-end rounded-pill">Follow</button>

                        </div>

                    </div>

                    
                </li>

    `)

}

export default WhoToFollowListItem;


const data = {
    avatarIcon: '../virgingalactic.png',
    userName: 'Virgin Galactic',
    handle: 'virgingalactic'

}
// function test() {
//     $('#wd-follow').append(
//         `${WhoToFollowListItem(data)}`
//     )
// }
// $(test)