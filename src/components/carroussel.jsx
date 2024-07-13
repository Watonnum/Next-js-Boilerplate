'use client';

import React from 'react';
import Slider from 'react-slick';
import RecommendTrack from '../app/recommendTrack';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 10,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 7,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="my-[2rem] max-w-[95rem] mx-auto">
      <Slider {...settings}>
        {RecommendTrack.map((data) => (
          <div key={data.id}>
            <a
              href={data.link_url}
              className="flex justify-center flex-col items-center hover:brightness-0 duration-300"
            >
              <img
                src={data.room_icon_url}
                alt=""
                className="w-[3rem] brightness-50"
              />
              <p className="text-center text-[#8B8B8B] p-2 text-md">
                {data.name}
              </p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
