import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="flex items-center relative cursor-pointer p-2 mb-2 space-x-3 hover:bg-gray-200">
      <Image
        className="rounded-full"
        alt="avatar"
        src={src}
        width={50}
        height={50}
        layout="fixed"
        objectFit="cover "
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full "></div>
    </div>
  );
}

export default Contact;
