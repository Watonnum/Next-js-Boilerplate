// @ts-nocheck

'use client';

import Bnk48 from '../app/music';

export default function Bnk() {
  return (
    <div className="container mx-auto">
      <div className="my-4 p-1">
        <p className="text-2xl text-black mb-4 font-bold ">BNK48</p>
      </div>

      <div className="grid md:grid-cols-5 gap-4 w-full grid-cols-2">
        {Bnk48.map((data) => {
          return (
            <div
              key={data.topic_id}
              className="p-1 flex flex-col justify-start items-center cursor-pointer border rounded-md hover:bg-slate-100"
            >
              <a href={data.post_url}>
                <img
                  src={data.thumbnail_url}
                  alt=""
                  className="border-transparent rounded-md lg:w-[300px] lg:h-[200px]"
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
