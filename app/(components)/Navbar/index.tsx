import React from "react";
import { Search, Settings } from "lucide-react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/redux/store";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollasped,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="dark:bg-dark-secondary flex items-center justify-between bg-white px-4 py-3">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute top-1/2 left-[4px] mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-black" />
          <input
            className="w-full rounded-full border-none bg-gray-100 p-2 pl-8 text-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-100 dark:text-black dark:placeholder-black"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Icons*/}
      <div className="flex items-center">
        <Link
          href="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
        <div className=",r-5 ml-2 hidden min-h-[2rem] w-[0.1rem] bg-gray-200 md:inline-flex"></div>
      </div>
    </div>
  );
};

export default Navbar;
