'use client';

import data from '../app/highlight';

export default function Highlight() {
  return (
    <div className="container mx-auto my-[2rem]">
      <div className="my-4 p-1">
        <p className="text-2xl text-black mb-4 font-bold ">Highlight</p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {data.map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-col justify-start items-center border rounded-md hover:bg-slate-100 cursor-pointer p-1"
            >
              <a href={item.post_url}>
                <img
                  src={item.image_url[1]}
                  alt=""
                  className="rounded-md w-full h-auto"
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
