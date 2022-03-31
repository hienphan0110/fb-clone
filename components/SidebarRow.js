export default function SidebarRow({ Icon, title }) {
  return (
    <div className="flex py-2 mt-2 items-center cursor-pointer hover:bg-gray-200">
      <Icon className="h-8 w-8 text-blue-500" />
      <p className="px-2">{title}</p>
    </div>
  );
}
