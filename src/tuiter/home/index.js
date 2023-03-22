import postArr from "./post.json"
import PostItem from "./post-item";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/TuitsList";
export default function HomeComponent() {

    return (
            <div>
                <h1>Home</h1>
                <WhatsHappening />
                <TuitList />
            </div>

            // <ul className="list-group">
            //     {
            //         postArr.map(post =>
            //             <PostItem key={post._id} post={post}/>)
            //     }
            //
            //
            // </ul>

    )

}