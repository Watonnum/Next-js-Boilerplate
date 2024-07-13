// @ts-nocheck

'use client';

import { FaRegEye } from 'react-icons/fa';
import DataMovies from '../app/movie';

export default function Movies() {
  return (
    <div className="container mx-auto">
      <div className="my-4 p-1">
        <p className="text-2xl text-black mb-4 font-semibold">
          หนัง / ภาพยนต์ / ซีรีย์
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {DataMovies.map((data) => {
          return (
            <div
              key={data.topic_id}
              className="flex flex-col justify-start cursor-pointer relative p-3"
            >
              <a href={data.post_url}>
                <img
                  src={data.thumbnail_url}
                  alt=""
                  className="rounded-xl md:w-[23rem] w-full h-[16rem]"
                />
                <p className=" text-black text-sm text-center align-top my-2">
                  {data.title}
                </p>
                <div className="absolute top-5 right-5 border rounded-lg p-[0.25rem] gap-1 bg-[#cbd3dc99] text-[0.7rem] flex items-center">
                  <p className="text-">{data.views_count}</p>
                  <FaRegEye className="text-[0.8rem]" />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
