'use client';

import React from 'react';
import Slider from 'react-slick';
import RecommendTrack from '../app/recommendTrack';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 100,
    pauseOnHover: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 10,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="my-[0.5rem]">
      <Slider {...settings}>
        {RecommendTrack.map((data) => (
          <div key={data.id}>
            <a
              href={data.link_url}
              className="flex justify-center flex-col items-center hover:brightness-0"
            >
              <img
                src={data.room_icon_url}
                alt=""
                className="w-[1.5rem] brightness-50 "
              />
              {/* <div className="text-[1.5rem] text-white px-6 flex justify-center items-center">
              {data.room_icon_url}
            </div> */}
              <p className="text-center text-[#8B8B8B] p-2">{data.name}</p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
