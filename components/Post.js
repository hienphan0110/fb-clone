import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";
import { db } from "../firebase";
import { useEffect, useState } from "react";

function Post({
  id,
  name,
  message,
  timestamp,
  postImage,
  imageToPost,
  avatar,
}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => {
            return {
              IdTest: doc.id,
              commentTest: doc.data(),
            };
          })
        );
      });
  }, [db, id]);
  const likePost = () => {
    setHasLiked(!hasLiked);
  };

  // useEffect(() => {
  //   db.collection("posts")
  //     .doc(id)
  //     .collection("likes")
  //     .onSnapshot((snapshot) => {
  //       setLikes(
  //         snapshot.docs.map((doc) => {
  //           return {
  //             Id: doc.id,
  //           };
  //         })
  //       );
  //     });
  // }, [db, id]);

  // useEffect(() => {
  //   setHasLiked(likes.findIndex((like) => like.id === id) !== -1);
  // }, [likes]);

  // const likePost = async (e, IId) => {
  //   if (hasLiked) {
  //     await db
  //       .collection("posts")
  //       .doc(id)
  //       .collection("likes")
  //       .delete();
  //   } else {
  //     await db.collection("posts").doc(id).collection("likes").add({
  //       username: name,
  //     });
  //   }
  // };

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    db.collection("posts").doc(id).collection("comments").add({
      comment: commentToSend,
      username: name,
      userImage: avatar,
      timestamp: timestamp,
    });
  };
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white rounded-t-2xl shadow-sm mt-5">
        <div className="items-center flex space-x-2">
          <img src={avatar} className="rounded-full w-10 h-10 cursor-pointer" />
          <div>
            <p className="font-medium cursor-pointer">{name}</p>

            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <img
            src={postImage}
            className="object-cover w-full h-full cursor-pointer"
          />
        </div>
      )}
      <div className="flex justify-between items-center bg-white shadow-md text-gray-400 border-t rounded-b-2xl">
        <div
          className="inputIcon rounded-none rounded-bl-2xl"
          onClick={likePost}
          style={hasLiked ? { color: "blue" } : {}}
        >
          <ThumbUpIcon className="h-4" />
          <p>Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p>Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p>Share</p>
        </div>
      </div>
      {/* comments */}
      {comments.length > 0 && (
        <div className="p-2 ">
          {comments.map((comment) => (
            <div key={comment.id} className="flex py-1 items-center">
              <img
                className="rounded-full h-10 w-10"
                src={comment.commentTest.userImage}
                alt=""
              />
              <div className="px-3 ml-2 bg-gray-300 rounded-xl">
                <p className="font-medium">{comment.commentTest.username}</p>
                <span>{comment.commentTest.comment}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* input cmt */}
      <div className="p-2 bg-white rounded-2xl shadow-md text-gray-500 mt-1">
        <div className="flex items-center relative">
          <img src={avatar} className="rounded-full w-10 h-10 cursor-pointer" />
          <form className="flex flex-1 px-2">
            <input
              className="rounded-full h-10 bg-gray-100 outline-none px-5 flex-grow"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a public comment..."
            />
            <button hidden type="submit" onClick={sendComment}>
              submit
            </button>
          </form>
          <div className="absolute bottom-1 left-7 bg-green-400 h-3 w-3 rounded-full "></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
