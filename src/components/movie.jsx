// @ts-nocheck

'use client';

import { FaRegEye } from 'react-icons/fa';
import DataMovies from '../app/movie';

export default function Movies() {
  return (
    <div className="2xl:max-w-[115rem] xl:max-w-screen-xl lg:max-w-[60rem] md:max-w-screen-sm max-w-[23rem] mx-auto">
      <div>
        <p className="text-2xl text-black my-8 font-semibold">
          หนัง / ภาพยนต์ / ซีรีย์
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {DataMovies.map((data) => {
          return (
            <div
              key={data.topic_id}
              className="flex flex-col justify-start cursor-pointer relative"
            >
              <a href={data.post_url}>
                <img
                  src={data.thumbnail_url}
                  alt=""
                  className="rounded-xl 2xl:w-[17.125rem] w-[23.563rem] h-[22.384rem] 2xl:h-[16.25rem] xl:w-[18.875rem] xl:h-[17.931rem] lg:w-[18.666rem] lg:h-[17.733rem] md:w-[20.75rem] md:h-[19.712rem] sm:w-[23.563rem] sm:h-[22.384rem]"
                />
                <p className=" text-black text-sm text-start align-top my-2">
                  {data.title}
                </p>
                <div className="absolute top-5 left-4 border rounded-lg p-[0.25rem] gap-1 bg-[#cbd3dc99] text-[0.7rem] flex items-center">
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
