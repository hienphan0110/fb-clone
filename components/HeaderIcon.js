export default function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex cursor-pointer items-center  md:px-10 md:hover:bg-gray-100 sm:h-14 rounded-xl active:border-b-2 active:border-blue-500">
      <Icon
        className={`h-5 text-gray-500 sm:h-7 mx-auto ${
          active && "text-blue-600"
        }`}
      />
    </div>
  );
}
