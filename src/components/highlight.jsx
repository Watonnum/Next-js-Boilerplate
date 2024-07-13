'use client';

import data from '../app/highlight';

export default function Highlight() {
  return (
    <div className="container mx-auto my-[2rem]">
      <div className=" p-1">
        <p className="text-2xl text-black mb-4 font-bold ">ไฮไลท์</p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {data.map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-col justify-start items-center cursor-pointer p-1"
            >
              <a href={item.post_url}>
                <img
                  src={item.image_url[1]}
                  alt=""
                  className="rounded-xl w-[23rem] h-[16rem]"
                />
                <p className=" text-black text-[1rem] text-center align-top ">
                  {item.name}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
