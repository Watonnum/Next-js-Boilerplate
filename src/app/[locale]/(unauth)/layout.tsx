'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';

import Carousel from '../../../components/carroussel';
import NavSerch from '../../../components/navSerch';

export default function Layout(props: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 w-full border-b bg-white transition-transform duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="mx-auto flex items-center justify-around p-3 md:max-w-screen-sm md:justify-between lg:max-w-[60rem] xl:max-w-screen-xl 2xl:max-w-[110rem]">
          {/* logo */}
          <div className="hidden md:flex">
            <a href="/" aria-label="..">
              <img
                src="/pantipLogo.jpg"
                alt=""
                className="w-[7.5rem] cursor-pointer"
              />
            </a>
          </div>

          {/* center */}
          <div className="flex gap-0 md:gap-6">
            <div className="hidden items-center gap-4 lg:flex">
              <a href="/">
                <div className="rounded-2xl px-5 py-2 hover:cursor-pointer hover:bg-[#fff2f2]">
                  <p>ตั้งกระทู้</p>
                </div>
              </a>
              <a href="/">
                <div className="rounded-2xl px-5 py-2 hover:bg-[#fff2f2]">
                  คอมมูนิตี้
                </div>
              </a>
            </div>
            {/* center-serchBar */}
            <div className="flex">
              <NavSerch />
            </div>
          </div>

          {/* Profile dropdown */}
          <div className="hidden gap-6 text-white md:flex">
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
                      แลกพ้อยต์
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-black data-[focus]:bg-[#fae2e2]"
                    >
                      กิจกรรมพันทิป
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
        <Carousel />
      </div>

      <div className="grow">{props.children}</div>
    </div>
  );
}
