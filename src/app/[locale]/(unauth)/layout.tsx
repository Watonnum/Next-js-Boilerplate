import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import * as React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { FaMagnifyingGlass, FaRegCompass } from 'react-icons/fa6';
import { MdOutlineFeed, MdStars } from 'react-icons/md';

export default function Layout(props: { children: React.ReactNode }) {
  const menubar = [
    {
      label: 'Home',
      icon: <FaHome />,
    },
    {
      label: 'My Feed',
      icon: <MdOutlineFeed />,
    },
    {
      label: 'Pantip Pick',
      icon: <AiFillLike />,
    },
    {
      label: 'Pantip Hitz',
      icon: <MdStars />,
    },
    {
      label: 'Explore',
      icon: <FaRegCompass />,
    },
  ];
  return (
    <div>
      <div className=" flex items-center justify-between bg-[#353156] p-4">
        <div className="hidden lg:block">
          <img
            src="./logo-mobile-pantip-white.png"
            alt=""
            className="w-32 cursor-pointer"
          />
        </div>
        <div className="flex gap-1">
          {menubar.map((item) => (
            <a
              key={item.label}
              href="/"
              className="flex flex-col items-center justify-center gap-2 rounded-lg px-8 py-2 text-[1rem] text-white hover:bg-[#2c2758]"
            >
              <div className="text-[2rem]">{item.icon}</div>
              <p className="text-xs">{item.label}</p>
            </a>
          ))}
        </div>
        {/* Profile dropdown */}
        <div className="flex gap-6 text-white">
          <div className="flex items-center justify-center contain-none">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md bg-[#353156] px-3 py-1.5 text-sm/6 font-semibold text-slate-200 shadow-inner  focus:outline-none data-[hover]:bg-[#2E2A49] data-[open]:bg-[#2E2A49] data-[focus]:outline-1 data-[focus]:outline-white">
                <CgProfile className="text-4xl" />
                <ChevronDownIcon className="size-4 fill-white/60" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-[#63607f]"
                  >
                    เข้าสู่ระบบ / สมัครสมาชิก
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-[#63607f]"
                  >
                    ตั้งกระทู้
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-[#63607f]"
                  >
                    คอมมูนิตี้
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* serchBar */}
      <div>
        <div className="flex items-center justify-center bg-[#2E2A49] p-2">
          <input
            type="text"
            placeholder="ค้นหาบน Pantip"
            className="h-8 w-80 rounded-full p-4 text-start"
          />
          <FaMagnifyingGlass className="ml-4 cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="grow">{props.children}</div>
    </div>
  );
}
