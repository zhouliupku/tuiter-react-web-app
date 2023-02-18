const PostItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img src=${post.portrait} class="rounded-circle float-end" height="30px" width="30px">
                
                </div>
                
                <div class="col-11">
                    <div class="row">
                        <div class="col-11">
                            <span>${post.userName}</span>
                            <span><i class="fa-solid fa-circle-check"></i></span>
                            <span class="text-secondary">${post.handle}</span>
                            <span class="text-secondary">${post.time}</span>
                            <p>${post.summary}</p>
                        </div>
                        <div class="col-1">...</div>
                    
                    </div>
                    
                    <div class="card">
                      <img class="card-img-top" src=${post.postPic} alt="Card image cap">
                      <div class="card-body">
                        <p class="card-title">${post.title}</p>
                        <p class="card-text">${post.postContent}</p>
                      </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-3">
                        <i class="fa-regular fa-comment"></i>
                        ${post.comment}                     
                        </div>
                        <div class="col-3">
                        <i class="fa-solid fa-retweet"></i>
                        ${post.forward}                        
                        </div>
                        <div class="col-3">
                        <i class="fa-regular fa-heart"></i>
                        ${post.like}
                        </div>
                        <div class="col-3">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    
                    </div>
                
                </div>
            
            
            </div>
                    
        </li>
    `)
}
export default PostItem;

const data = {

    userName: 'Elon Musk',
    handle: '@elonmusk',
    time: '23h',
    portrait: '../../../images/elonmusk.jpg',
    summary: 'Amazing show about @Inspiration4x mission!',
    postPic: '../../../images/inspiration4.jpg',
    title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
    postContent: 'From training to launch to landing, this all access docuseries rides' +
        ' along with the inspiration4 crew on the first all-civilian orbital space... netflix.com',
    comment: '4.2K',
    forward: '3.5K',
    like: '37.5K',

}

function test() {
    $('#wd-test').append(
        `${PostItem(data)}`
    )
}
$(test)