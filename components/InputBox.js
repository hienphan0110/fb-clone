import ModalToPost from "./ModalToPost";
import Image from "next/image";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

function InputBox() {
  const inputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md text-gray-500 p-4">
        <div className="flex items-center ">
          <Image
            className="z-50 rounded-full"
            src="https://i.pinimg.com/736x/dc/00/4b/dc004b7313bc615a1b5be833c9760aab.jpg"
            alt="avatar"
            width={40}
            height={40}
            layout="fixed"
          />
          <form className="flex flex-1 px-2">
            <input
              className="rounded-full h-12 bg-gray-100 outline-none px-5 flex-grow "
              onClick={() => setShowModal(true)}
              placeholder="What's on your mind, Hien Phan?"
            />
          </form>
        </div>
        <div className="flex justify-evenly p-2">
          <div className="inputIcon">
            <VideoCameraIcon className="text-red-500 h-7" />
            <p>Live Video</p>
          </div>
          <div className="inputIcon" onClick={() => setShowModal(true)}>
            <CameraIcon className="text-green-500 h-7" />
            <p>Photo/Video</p>
          </div>
          <div className="inputIcon">
            <EmojiHappyIcon className="text-yellow-400 h-7" />
            <p>Felling/Activity</p>
          </div>
        </div>
      </div>
      <ModalToPost onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
}

export default InputBox;
