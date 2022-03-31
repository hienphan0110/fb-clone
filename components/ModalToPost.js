import React, { useRef, useState } from "react";
import Image from "next/image";
import firebase from "firebase";
import { db, storage } from "../firebase";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon, XIcon, xcircleIcon } from "@heroicons/react/outline";

function ModalToPost({ show, onClose }) {
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const user = {
    id: 1,
    name: "Hien Phan",
    avatar:
      "https://i.pinimg.com/736x/dc/00/4b/dc004b7313bc615a1b5be833c9760aab.jpg",
  };

  const sendPost = (e) => {
    e.preventDefault();
    onClose();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: user.name,
        avatar: user.avatar,
        image: imageToPost,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const upLoadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          upLoadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };
  if (!show) {
    return ModalToPost;
  } else {
    null;
  }
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className=" absolute justify-center items-center flex z-50 inset-0 bg-gray-500/75 transition">
      <div className="bg-white rounded relative w-1/2 mr-20">
        <div className="modal_header text-center font-semibold p-2">
          <p className="text-black">Create post</p>
          <div className="p-2 flex justify-end bg-gray-200 w-10 h-10 rounded-full absolute right-3 top-4">
            <XIcon
              className=" text-gray-500 cursor-pointer text-center"
              onClick={handleCloseClick}
            />
          </div>
        </div>
        <div className="modal_body py-2">
          <div className=" flex items-center pb-4 pl-4">
            <Image
              className="z-50 rounded-full "
              src="https://i.pinimg.com/736x/dc/00/4b/dc004b7313bc615a1b5be833c9760aab.jpg"
              alt="avatar"
              width={40}
              height={40}
              layout="fixed"
            />
            <p className="px-3 text-black">Hien Phan</p>
          </div>
          <div className="pb-16">
            <input
              className=" h-12 bg-transparent outline-none px-5 flex-grow w-full"
              type="text"
              ref={inputRef}
              placeholder="What's on your mind, Hien Phan?"
            />
          </div>
          {imageToPost && (
            <div className="flex h-22 px-6 cursor-pointer ">
              <img
                className="h-24 w-22 relative rounded-sm"
                src={imageToPost}
                alt=""
              />
              <div
                className="p-2 flex justify-end bg-gray-200 w-6 h-6 rounded-full relative right-6"
                onClick={removeImage}
              >
                <XIcon className="text-gray-500 cursor-pointer text-center" />
              </div>
            </div>
          )}
          <div className="flex justify-between p-1 items-center border-solid	border-2 border-gray-300 m-4 rounded-lg">
            <p className="text-black pl-4">Add to your post</p>
            <div className="flex">
              <div className="inputIcon">
                <VideoCameraIcon className="text-red-500 h-7" />
              </div>
              <div
                className="inputIcon"
                onClick={() => filepickerRef.current.click()}
              >
                <CameraIcon className="text-green-500 h-7" />
                <input
                  hidden
                  onChange={addImageToPost}
                  type="file"
                  ref={filepickerRef}
                />
              </div>
              <div className="inputIcon">
                <EmojiHappyIcon className="text-yellow-400 h-7" />
              </div>
            </div>
          </div>
        </div>

        <div className="modal_footer text-center bg-blue-600 p-2 m-4 rounded-lg hover:bg-blue-500">
          <button
            className="w-full h-full px-2 text-black"
            type="submit"
            onClick={sendPost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalToPost;
