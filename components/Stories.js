import StoryCard from "./StoryCard";
import Image from "next/image";
const stories = [
  {
    name: "Hien Phan",
    profile:
      "https://i.pinimg.com/736x/dc/00/4b/dc004b7313bc615a1b5be833c9760aab.jpg",
    src: "https://i.pinimg.com/564x/6c/90/ef/6c90efa2122af77a9147226902aac195.jpg",
  },
  {
    name: "Jennie",
    profile:
      "https://i.pinimg.com/236x/a2/f0/92/a2f0928776ad0227f86b12d0360052d0.jpg",
    src: "https://i.pinimg.com/564x/ea/78/85/ea788570da633d00bfb2488d4b4f1506.jpg",
  },
  {
    name: "Phil Foden",
    profile:
      "https://i.pinimg.com/564x/79/33/3e/79333ea02b287e3022c6d6d5c9c46433.jpg",
    src: "https://i.pinimg.com/736x/b9/20/b7/b920b7dc0a3ac2e88303c54e127d2a18.jpg",
  },
  {
    name: "Elon Musk",
    profile:
      "https://i.pinimg.com/564x/8e/30/36/8e30360e76f436245af652d70806a3f3.jpg",
    src: "https://i.pinimg.com/originals/a0/61/35/a061350e5c5db9d25638bbeb5e4a6778.gif",
  },
  {
    name: "One",
    profile:
      "https://i.pinimg.com/736x/24/de/dc/24dedc9083137f9216966842116bac3a.jpg",
    src: "https://i.pinimg.com/564x/7b/35/b8/7b35b8448ea45f11ea3b1126ce3eae8d.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center mb-4">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          profile={story.profile}
          src={story.src}
          name={story.name}
        />
      ))}
    </div>
  );
}

export default Stories;
