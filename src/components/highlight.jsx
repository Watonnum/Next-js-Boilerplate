'use client';

import data from '../app/highlight';

export default function Highlight() {
  return (
    <div className="2xl:max-w-[115rem] xl:max-w-screen-xl lg:max-w-[60rem] md:max-w-screen-sm max-w-[23rem] mx-auto">
      <div>
        <p className="text-2xl text-black mb-8 font-semibold">ไฮไลท์</p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {data.map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-col justify-start cursor-pointer"
            >
              <a href={item.post_url}>
                <img
                  src={item.image_url[1]}
                  alt=""
                  className="rounded-xl 2xl:w-[17.125rem] w-[23.563rem] h-[22.384rem] 2xl:h-[16.25rem] xl:w-[18.875rem] xl:h-[17.931rem] lg:w-[18.666rem] lg:h-[17.733rem] md:w-[20.75rem] md:h-[19.712rem] sm:w-[23.563rem] sm:h-[22.384rem]"
                />
                <p className=" text-black text-[1rem] text-start align-top ">
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
