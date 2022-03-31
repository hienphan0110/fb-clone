import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

function Widgets() {
  const contacts = [
    {
      name: "Jay",
      src: "https://i.pinimg.com/564x/02/93/cb/0293cb132bf40b4f2013b148eabd5abe.jpg",
    },
    {
      name: "Phil Foden",
      src: "https://i.pinimg.com/564x/79/33/3e/79333ea02b287e3022c6d6d5c9c46433.jpg",
    },
    {
      name: "Elon Musk",
      src: "https://i.pinimg.com/564x/8e/30/36/8e30360e76f436245af652d70806a3f3.jpg",
    },
    {
      name: "One",
      src: "https://i.pinimg.com/736x/24/de/dc/24dedc9083137f9216966842116bac3a.jpg",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://i.pinimg.com/564x/56/78/4d/56784dfcc624e322c04e1037ba83ae09.jpg",
    },
    {
      name: "Jennie",
      src: "https://i.pinimg.com/236x/a2/f0/92/a2f0928776ad0227f86b12d0360052d0.jpg",
    },
    {
      name: "Billie Eilish",
      src: "https://i.pinimg.com/564x/24/ef/12/24ef124766fb6b34a273197b29dbaa13.jpg",
    },
    {
      name: "G Dragon",
      src: "https://i.pinimg.com/564x/78/bc/36/78bc36f5acf02afb8dc3e112eb1d80fd.jpg",
    },
  ];
  return (
    <div className="w-64 m-6">
      <div className="flex justify-between mb-3">
        <h1 className="font-bold text-lg">Contacts</h1>
        <div className="flex cursor-pointer">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6  mx-2" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
