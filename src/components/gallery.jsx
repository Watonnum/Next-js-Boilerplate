// @ts-nocheck

'use client';

import DataGallery from '../app/gallery';

export default function Gallery() {
  return (
    <div className="container mx-auto my-[2rem]">
      <div className="my-4 p-1">
        <p className="text-2xl text-black mb-4 font-bold ">Gallery</p>
      </div>

      <div className="grid md:grid-cols-6 gap-4 grid-cols-3">
        {DataGallery.map((data) => {
          return (
            <div
              key={data.topic_id}
              className="flex flex-col justify-start items-center border rounded-md hover:bg-slate-100 cursor-pointer p-1"
            >
              <a href={data.post_url}>
                <img
                  src={data.thumbnail_url}
                  alt=""
                  className=" rounded-md w-full h-[180px]"
                />
                <p className=" text-black text-[1rem] text-center align-top my-2">
                  {data.title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
