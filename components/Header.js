import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="flex sticky z-50 p-2 shadow-md items-center">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt="logo"
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 bg-transparent outline-none items-center"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end cursor-pointer">
        <Image
          className="z-50 rounded-full"
          src="https://i.pinimg.com/736x/dc/00/4b/dc004b7313bc615a1b5be833c9760aab.jpg"
          alt="avatar"
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="whitespace-nowrap pr-3 font-medium">Hien Phan</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}
