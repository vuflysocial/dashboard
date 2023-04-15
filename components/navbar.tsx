import Image from 'next/image'
import profilePic from '../public/erwin.png'
import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MainNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log(`Clicked on ${option}`);
    setIsDropdownOpen(false);
  };


  return (
    <div className="fixed w-full flex items-center justify-between h-14 z-50">
      <div className="flex items-center justify-start pl-3 w-14 md:w-64 h-16 bg-white border-r">
        <span className="text-slate-800 hidden md:block">
          Dashboard{" "}
          <small className="hidden md:block">Administrator</small>
        </span>
      </div>

      <div className="items-center bg-white border-b header-right">
        <div className="relative">
          <button
            className="flex text-slate-600 text-sm focus:outline-none hover:text-gray-900"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <i className="ri-twitter-line"></i>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link
  href="charts" className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
      Charts

  </Link>
  <Link
  href="trade" className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
      Trade

  </Link>
  <Link
  href="burn" className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
      Burn

  </Link>
</div>

            </div>
          )}
          <button
            className="ml-2"
            onClick={toggleDropdown}
          >
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={32}
              height={32}
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
