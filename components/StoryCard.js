import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 lg:h-56 lg:w-32 cursor-pointer mx-2 p-2">
      <Image
        className="absolute z-50 rounded-full "
        alt="avatar"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectId="cover"
      />
      <Image className="filter rounded-2xl" alt="s" src={src} layout="fill" />
      <div className="flex absolute z-50 text-white bottom-1 px-3 font-semibold">
        {name}
      </div>
    </div>
  );
}

export default StoryCard;
