// @ts-nocheck

'use client';

import { FaRegEye } from 'react-icons/fa';
import DataGallery from '../app/gallery';

export default function Gallery() {
  return (
    <div className="container mx-auto my-[2rem]">
      <div className="my-4 p-1 flex">
        <a
          href="https://pantip.com/forum/gallery"
          className="flex hover:underline"
        >
          <p className="text-2xl text-black mb-4 font-semibold ">แกลลอรี่</p>
        </a>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {DataGallery.map((data) => {
          return (
            <div
              key={data.topic_id}
              className="flex flex-col justify-start items-center cursor-pointer relative p-3"
            >
              <a href={data.post_url}>
                <img
                  src={data.thumbnail_url}
                  alt=""
                  className="rounded-xl md:w-[23rem] w-full h-[16rem]"
                />
                <p className=" text-black text-[1rem] text-center align-top my-2">
                  {data.title}
                </p>
              </a>
              <div className="absolute top-5 right-5 border rounded-lg p-[0.25rem] gap-1 bg-[#cbd3dc99] text-[0.7rem] flex items-center">
                <p className="text-">{data.views_count}</p>
                <FaRegEye className="text-[0.8rem]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
