import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import * as React from 'react';
import { CgProfile } from 'react-icons/cg';

import Carousel from '../../../components/carroussel';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="container sticky top-0 mx-auto">
      <div className=" sticky flex items-center  justify-between border-b border-slate-300 p-4">
        {/* logo */}
        <div className="hidden lg:block">
          <a href="/" aria-label="..">
            <img
              src="/airbnb-svgrepo-com.svg"
              alt=""
              className="w-16 cursor-pointer"
            />
          </a>
        </div>

        {/* center */}
        <div className="flex gap-4">
          <div className="rounded-2xl px-5 py-2 hover:bg-[#fff2f2]">
            <a href="/">ที่พัก</a>
          </div>
          <div className="rounded-2xl px-5 py-2 hover:bg-[#fff2f2]">
            <a href="/">เอ็กพีเรียนซ์</a>
          </div>
        </div>

        {/* Profile dropdown */}
        <div className="flex gap-6 text-white">
          <div className="flex items-center justify-center contain-none">
            <Menu>
              <MenuButton className="flex flex-row items-center gap-4 rounded-full border px-5 py-3 text-sm/6 font-semibold text-[#615e5e] shadow-inner focus:outline-none data-[hover]:bg-[#ffffffcf] data-[open]:bg-white data-[hover]:shadow-md data-[focus]:outline-1 data-[focus]:outline-white">
                <CgProfile className="text-4xl" />
                <ChevronDownIcon className="size-4 fill-[#6A6A6A]" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-black data-[focus]:bg-[#fae2e2]"
                  >
                    เข้าสู่ระบบ / สมัครสมาชิก
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-black data-[focus]:bg-[#fae2e2]"
                  >
                    ตั้งกระทู้
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-black data-[focus]:bg-[#fae2e2]"
                  >
                    คอมมูนิตี้
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <Carousel />

      <div className="grow">{props.children}</div>
    </div>
  );
}
