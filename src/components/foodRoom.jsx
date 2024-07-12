// @ts-nocheck

'use client';

import FoodRoom from '../app/foodroom';

export default function Food() {
  return (
    <div className="container mx-auto my-[2rem]">
      <div className="my-4 p-1">
        <p className="text-2xl text-black mb-4 font-bold ">Food</p>
      </div>

      <div className="grid md:grid-cols-5 gap-4 grid-cols-2">
        {FoodRoom.map((data) => {
          return (
            <div
              key={data.topic_id}
              className="flex flex-col justify-start items-center "
            >
              <a href={data.post_url}>
                <img
                  src={data.thumbnail_url}
                  alt=""
                  className="rounded-md w-full h-[180px]"
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
