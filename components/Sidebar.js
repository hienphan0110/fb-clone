import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="w-56 pl-2">
      <div className="flex p-2 mt-2 cursor-pointer">
        <Image
          className="z-50 rounded-full"
          src="https://i.pinimg.com/736x/dc/00/4b/dc004b7313bc615a1b5be833c9760aab.jpg"
          alt="avatar"
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="whitespace-nowrap p-2 font-medium">Hien Phan</p>
      </div>
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Group" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Event" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="More" />
    </div>
  );
}

export default Sidebar;
