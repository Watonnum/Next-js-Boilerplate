'use client';

import data from '../app/highlight';

export default function Highlight() {
  return (
    <div className="container mx-auto my-[2rem]">
      <div className="my-4 p-1">
        <p className="text-2xl text-black mb-4 font-bold ">Highlight</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 w-full grid-cols-3">
        {data.map((item) => {
          return (
            <div
              key={item.name}
              className="p-1 flex flex-col justify-start items-center cursor-pointer border rounded-md hover:bg-slate-100"
            >
              <a href={item.post_url}>
                <img
                  src={item.image_url[1]}
                  alt=""
                  className="border-transparent rounded-md"
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
