import postArr from "./post.json"
import PostItem from "./post-item";
export default function HomeComponent() {

    return (

            <ul className="list-group">
                {
                    postArr.map(post =>
                        <PostItem key={post._id} post={post}/>)
                }


            </ul>

    )

}