import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          timestamp={post.data().timestamp}
          avatar={post.data().avatar}
          postImage={post.data().image}
        />
      ))}
    </div>
  );
}

export default Posts;
